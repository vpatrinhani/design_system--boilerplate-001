const puppeteer = require('puppeteer');
const glob = require('glob');
const path = require('path');
const colors = require('colors')
const fs = require('fs-extra')
const StreamZip = require('node-stream-zip')
const rimraf = require('rimraf')
const lodash = require('lodash')
const isWindows = process.platform === 'win32';
const backslash = isWindows ? '\\' : '/';


const watiForSomeTime = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const checkDownload = filename => new Promise((resolve, reject) => {
  const interval = 1000;
  const timeout = 10000;
  let timeoutOccured = false;

  let timer = setInterval(async () => {
      if (timeoutOccured) {
        clearInterval(timer)
        timer = null
        reject(`Timeout was elapsed, the file: ${filename}, was not found.`)
      }

      if (fs.existsSync(filename)) {
        clearInterval(timer);
        resolve();
      }
  }, interval);

  setTimeout(() => { timeoutOccured = true }, timeout)
});


const logStep = (msg) => {
  process.stdout.write(' ')
  console.log(msg);
  process.stdout.write(' ')
}

const parseAndWriteFileIntoListAndMap = ({ splittedChunk, resolvedOutputPath }) => {
  try {
    
    const fileContentList = { icons: [] }
    const fileContentMap = { icons: {} }
  
    splittedChunk.forEach((element) => {
      const name = element.substring(6, element.indexOf(':'))
      const content = element.substring(element.indexOf(':') + 4, element.lastIndexOf('"'))

      if (!name || !content) return 

      fileContentMap.icons = {
        ...fileContentMap.icons,
        [name]: content
      }
      fileContentList.icons.push({
        name, content
      })
    })
  
    fs.writeFile(resolvedOutputPath + '/icons-list--font.json', JSON.stringify(fileContentList, null, "  "), function (err) {
      if(err) throw err
    })

    fs.writeFile(resolvedOutputPath + '/icons-map--font.json', JSON.stringify(fileContentMap, null, "  "), function (err) {
      if(err) throw err
    })
  
  } catch (error) {
    console.log(error)
  }
}

const prepareIconsList = (options) => {
  logStep(`\n[STEP - 1/4] Prepare Icon List\n`)

  // prepare icon list
  let items = [];
  glob.sync(options.iconsPath + '**/*.svg').map(filename => {
    items.push(path.resolve(filename));
  });

  const tmpOutputPath = path.resolve(path.resolve(options.outputPath) + '/tmp/');
  const tmpOutputFile = tmpOutputPath + backslash + options.iconLibraryName + '-v1.0.zip';

  return { tmpOutputPath, tmpOutputFile, items }
}

const runAutomatedScript = async ({ tmpOutputPath, items, options, tmpOutputFile }) => {
  logStep(`\n[STEP - 2/4] Running automated upload script\n`)

  // Config
  const defaultArgsOverride = {
    headless: !options.debug 
  }  

  // launch the browser
  const browser = await puppeteer.launch(defaultArgsOverride);
  
  // create a page
  const page = await browser.newPage();

  // allow downloads and set download path to your browser
  await page._client().send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: tmpOutputPath
  });

  try {
    
    // go to icomoon
    await page.goto('https://icomoon.io/app/#/select');

    const modalOverlaySelector = 'div[ng-controller="MsgCtrl"]'
    const modalOverlay = await page.$(modalOverlaySelector)
    modalOverlay.style = 'display: none;'
  
    // clear default set
    const defaultMenuItem = '#setH1 > button'
    const removeSetButton = 'button[ng-click="removeSet($index)"]'
    await page.waitForSelector(defaultMenuItem)
    await page.click(defaultMenuItem)
    await page.waitForSelector(removeSetButton)
    await page.click(removeSetButton)
  
    // add files
    const [chooser] = await Promise.all([
      page.waitForFileChooser(),
      page.click("#file"),
    ])
    await chooser.accept(items)  

    // clear dismiss modal
    // await watiForSomeTime(1000)
    // const dismissButtonXPath = '/html/body/div[2]/div/button[1]'
    // await page.waitForXPath(dismissButtonXPath)
    // const [dismissButton] = await page.$x(dismissButtonXPath)
    // await dismissButton.click()

    // check for warning menu
    // clear dismiss modal
    // await watiForSomeTime(2000)

    // const containsDismiss = await page.$x("//button[contains(., 'Dismiss')]")

    // if (containsDismiss.length) {
    //   console.warn(`\n[WARNING!] Strokes get ignored when generating fonts. You can convert them to fills to prevent this. Some icons might not be generated. Defaulting to dismiss.\n`.yellow)
      
    //   await containsDismiss[0].click()
    // }

    await watiForSomeTime(2000)
    
    // select all icons
    const addedMenuItemSelector = '#setH0 > button'
    const selectAllSelector = 'button[ng-click="selectAllNone($index, true)"]'
    await page.waitForSelector(addedMenuItemSelector)
    // click on the body of the document twice, so it deselects the file upload tray
    await page.click('body')
    await page.click('body')
    await watiForSomeTime(1000)
    await page.click(addedMenuItemSelector)
    await watiForSomeTime(1000)
    
    await page.waitForSelector(selectAllSelector)
    await page.click(selectAllSelector)

    // generate font
    const generateFontSelector = 'a[href="#/select/font"]'
    await page.waitForSelector(generateFontSelector)
    await page.click(generateFontSelector)

    // check for warning menu
    // clear dismiss modal
    // await watiForSomeTime(2000)

    // const containsDeselect = await page.$x("//button[contains(., 'Deselect')]")

    // if (containsDeselect.length) {
    //   console.warn(`\n[WARNING!] Strokes get ignored when generating fonts. You can convert them to fills to prevent this. Some icons might not be generated. Defaulting to deselect.\n`.yellow)
    //   await containsDeselect[0].click()

    //   await watiForSomeTime(1000)
    // }

    // change configs
    const preferencesSelector = 'button[ng-click="visiblePanels.fontPref = true"]'
    const fontNameInputSelector = 'input[ng-model="fontPref.metadata.fontFamily"]'
    // click on the body of the document twice, so it clears the previous selection
    await page.click('body')
    await page.click('body')
    await watiForSomeTime(1000)
    await page.waitForSelector(preferencesSelector)
    await page.click(preferencesSelector)
    const fontNameInput = await page.$(fontNameInputSelector)

    // clear input and type name
    await fontNameInput.click({clickCount: 3});
    await fontNameInput.press('Backspace'); 
    await fontNameInput.type(options.iconLibraryName)

    // select generate css variables
    const cssVariablesSelector = '/html/body/div[4]/div[2]/div/div[1]/div/div/fieldset[1]/label[8]'
    const closePrefButtonSelector = 'button[ng-click="visiblePanels.fontPref = false"]'
    const [generateCSSVariables] = await page.$x(cssVariablesSelector)
    await generateCSSVariables.click()
    await watiForSomeTime(1000)
    await page.waitForSelector(closePrefButtonSelector)
    await page.click(closePrefButtonSelector)

    // // click download button
    const downloadButton = 'button[ng-click="download()"]'
    await page.waitForSelector(downloadButton)
    await page.click(downloadButton)

    await checkDownload(path.resolve(tmpOutputFile));
    
    logStep(`\n[SUCESS] File downloaded: ${tmpOutputFile}\n`.green)

    await watiForSomeTime(1000)

    await page.close()
    await browser.close()    
  } catch (error) {
    console.log(`\n [ERROR!] ${error}\n`.red)
    console.log(error)
    console.log(options.debug)
    if (!options.debug) {
      await page.close()
      await browser.close()

      console.log(`\n Process exited with error code 1\n`.red)
      process.exit(1) 
    }

  } 
}

const extractFileContents = async ({ tmpOutputFile, tmpOutputPath, resolvedOutputPath, options }) => {
  logStep(`\n[STEP 3/4] Starting content extraction\n`)

  try {    
    if (!fs.existsSync(tmpOutputFile)) {
      console.log(`Error: Font file do not exists`.red);
  
      if (fs.existsSync(tmpOutputPath)) {
        rimraf.sync(tmpOutputPath);
      }
  
      return;
    }
  
    const currentDir = path.resolve()
    const fontsOutputPath = currentDir + backslash +'fonts';
    const variablesOutputPath = resolvedOutputPath
  
    if(!fs.existsSync(variablesOutputPath + '/variables'))
      fs.emptyDirSync(variablesOutputPath + '/variables');

    if(!fs.existsSync(tmpOutputPath + backslash +"icomoon"))
      fs.emptyDirSync(tmpOutputPath + backslash + "icomoon");
       
    const zip = new StreamZip.async({ file: tmpOutputFile })
    const count = await zip.extract(null, tmpOutputPath + backslash + "icomoon")

    console.log(`Extracted ${count} entries`)
    await zip.close()

    // save fonts
    fs.copySync(tmpOutputPath + `${backslash}icomoon${backslash}fonts`, fontsOutputPath);

    // save scss
    let variables = fs.readFileSync(tmpOutputPath + `${backslash}icomoon${backslash}variables.scss`).toString();
    console.log('variables: ',variables)
    fs.writeFileSync(variablesOutputPath + `${backslash}variables${backslash}variables.scss`, variables);

    fs.remove(fontsOutputPath + `${backslash}${options.iconLibraryName}.eot`)

    if (fs.existsSync(tmpOutputPath))
      rimraf.sync(tmpOutputPath);
  } catch (error) {
    console.log(`\n [ERROR!] ${error}\n`.red)
    console.log(`\n Process exited with error code 1\n`.red)
    process.exit(1) 
  }
}

const createFileMappings = async ({ resolvedOutputPath }) => {
  try {
    logStep(`\n[STEP 4/4] Create mapping files\n`)
  
    const sassVariablesPath = path.resolve(resolvedOutputPath + '/variables/variables.scss')
    
    const fileReadStream = fs.createReadStream(sassVariablesPath, 'UTF-8')
  
    fileReadStream.on("data", function(chunk) {
      const splittedChunk = chunk.split('\n')
      splittedChunk.splice(0, 3)
      parseAndWriteFileIntoListAndMap({ splittedChunk, resolvedOutputPath })
      console.log('\n')
    })
  
    await watiForSomeTime(1000)
  
    if (fs.existsSync(path.resolve(resolvedOutputPath + '/variables')))
      rimraf.sync(path.resolve(resolvedOutputPath + '/variables'));
  } catch (error) {
    console.log(`\n [ERROR!] ${error}\n`.red)

    console.log(`\n Process exited with error code 1\n`.red)
    process.exit(1)   
  }
}

const copyFilesToFolder = async ({ resolvedOutputPath }) => {
  let baseSvgs = [];
  let files = [
    'cmdAdd24.svg',
    'cmdAddLatestReference24.svg',
    'cmdAddPart24.svg',
    'cmdAddSection24.svg',
    'cmdAddtoStudy24.svg',
    'cmdAlertAdd24.svg',
    'cmdAlerts16.svg',
    'cmdAlignBottom16.svg',
    'cmdAlignLeft16.svg',
    'cmdAlignRight16.svg',
    'cmdAlignTop16.svg',
    'cmdApplyExemption24.svg',
    'cmdArcCenter24.svg',
    'cmdAssignProject24.svg',
    'cmdAssignTask24.svg',
    'cmdAssignVendor24.svg',
    'cmdBackwards16.svg',
    'cmdBackwards24.svg',
    'cmdCalendar16.svg',
    'cmdCancelCheckout24.svg',
    'cmdChangeCurrency24.svg',
    'cmdChangeOwner24.svg',
    'cmdCheckin24.svg',
    'cmdCheckout24.svg',
    'cmdClaimTask24.svg',
    'cmdClipboard24.svg',
    'cmdClose16OLD.svg',
    'cmdClose24OLD.svg',
    'cmdCloseTab16.svg',
    'cmdConfigureBasedOnSelection24.svg',
    'cmdConnect24.svg',
    'cmdCopy16.svg',
    'cmdCopy24.svg',
    'cmdCreateChangeProposal24.svg',
    'cmdCreateGroup24.svg',
    'cmdCreateInteraction24.svg',
    'cmdCreateLocation24.svg',
    'cmdCreatePort24.svg',
    'cmdCreateSchedule24.svg',
    'cmdCut16.svg',
    'cmdCut24.svg',
    'cmdDashboard16.svg',
    'cmdDeleteAllocationDecision24.svg',
    'cmdDependency24.svg',
    'cmdDownload24.svg',
    'cmdEmptyStar24.svg',
    'cmdExitFitToWindow16.svg',
    'cmdExitFitToWindow24.svg',
    'cmdExport16.svg',
    'cmdExport24.svg',
    'cmdExport32.svg',
    'cmdFilterAnalysisRequest24.svg',
    'cmdFlatLoadAll24.svg',
    'cmdForward24.svg',
    'cmdForwards16.svg',
    'cmdForwards24.svg',
    'cmdGenerate24.svg',
    'cmdHideAllPMI24.svg',
    'cmdHistory16.svg',
    'cmdHistory24.svg',
    'cmdImport16.svg',
    'cmdImport24.svg',
    'cmdImport32.svg',
    'cmdImportDeclaration24.svg',
    'cmdImportExport24.svg',
    'cmdIncomingPartial24.svg',
    'cmdInsert24.svg',
    'cmdInsertOLE16.svg',
    'cmdInsertPicture16.svg',
    'cmdInsertPicture24.svg',
    'cmdLaunchSimulationTool24.svg',
    'cmdLicense24.svg',
    'cmdManageDimensions24.svg',
    'cmdMatrixView24.svg',
    'cmdMeasureTape24.svg',
    'cmdModelView24.svg',
    'cmdMoveDown24.svg',
    'cmdMoveToSection24.svg',
    'cmdMoveUp24.svg',
    'cmdMultipleCreate24.svg',
    'cmdOpen16.svg',
    'cmdOpen24.svg',
    'cmdOpenSharedEffectivity24.svg',
    'cmdOppositeSelection24.svg',
    'cmdOrientISO24.svg',
    'cmdOutgoingPartial24.svg',
    'cmdOverideComplianceResult24.svg',
    'cmdPerformSubstanceComplianceCheck24.svg',
    'cmdPlaneYz24.svg',
    'cmdPostEvent24.svg',
    'cmdPrint16.svg',
    'cmdPrint24.svg',
    'cmdProximity24.svg',
    'cmdProxyBid24.svg',
    'cmdRelease24.svg',
    'cmdRotate16.svg',
    'cmdRotate24.svg',
    'cmdRotateDrawingObject24.svg',
    'cmdSave16.svg',
    'cmdSave24.svg',
    'cmdStructure32.svg',
    'cmdTrash16.svg',
    'cmdTrash24.svg',
    'cmdUpload16.svg',
    'cmdUpload24.svg',
    'cmdViewMenu32.svg',
    'cmdZoomOut16.svg',
    'cmdZoomOut24.svg',
    'cmdZoomTool16.svg',
    'cmdZoomTool24.svg'
  ]
  let copyF = []

  glob.sync('icons/baseSvgs/**/*.svg').map(filename => {
    baseSvgs.push(filename);
  });  

  baseSvgs.forEach(filename => {
    const filenameS = filename.substring(filename.lastIndexOf('/') + 1, filename.length).trim()

    if (files.includes(filenameS)) {
      copyF.push(path.resolve(filename))
    }
  })

  copyF.map(filePath => { 
    console.log('src', filePath)
    console.log('dest', path.join(path.resolve(`icons${backslash}baseSvgs`), `badRes${path.basename(filePath)}`))

    return fs.copyFile(filePath, path.join(path.resolve(`icons${backslash}badResSvgs`), path.basename(filePath))) 
  })
}

const intersectionFiles = () => {
  let standardSvgs = [];
  let baseSvgs = [];

  glob.sync('icons/svg/**/*.svg').map(filename => {
    standardSvgs.push(filename.substring(filename.lastIndexOf('/') + 1, filename.length));
  });

  glob.sync('icons/baseSvgs/**/*.svg').map(filename => {
    baseSvgs.push(filename.substring(filename.lastIndexOf('/') + 1, filename.length));
  });  

  // const previousIconsDif = lodash.difference(previousIcons.icons, baseSvgs)
  // const newIconsDif = lodash.difference(baseSvgs, previousIcons.icons)

  // console.log('\n Missing Icons - Intersection\n')
  // console.log(`Total Missing icons count: ${previousIcons.icons.length}`)
  // console.log('\n Difference in the previous version\n')
  // console.log(lodash.difference(previousIconsDif))
  // console.log(newIconsDif)
}

const createSvgMappings = async (resolvedOutputPath) => {
  let svgs = [];
  let imports = ''
  const svgMap = { icons: [] }
  let importMapString = ''
  let importMapStringHeader = `export const importMap: ImportSVGMap = {`

  const iconInterface = `interface ImportSVGMap { [index: string]: string; }`

  glob.sync('icons/svg/**/*.svg').map(filename => {
    const fileName = filename.substring(filename.lastIndexOf('/') + 1, filename.length - 4)

    svgs.push(filename.substring(filename.lastIndexOf('/') + 1, filename.length));
    svgMap.icons.push(fileName)    
    imports += `import ${fileName} from './svg/${fileName}.svg' \n`
    importMapString += `"${fileName}": ${fileName}, \n`
  });

  const svgIconsMapping = `
    ${iconInterface}

    ${imports}

    ${importMapStringHeader}
    ${importMapString}
    }
  `
  
  fs.writeFileSync(resolvedOutputPath + '/icons-map--svg.json', JSON.stringify(svgMap, null, "  "), function (err) {
    if(err) { throw err }
  })
  
  fs.writeFileSync(resolvedOutputPath + '/svg-icons-mapping.ts', svgIconsMapping, function (err) {
    if(err) throw err
  })
}

module.exports = async function(options) {
  const resolvedOutputPath = path.resolve(options.outputPath)

  logStep(`\n[INFO] Starting icon conversion..\n`)      

  const { tmpOutputPath, tmpOutputFile, items } = prepareIconsList(options)

  await runAutomatedScript({tmpOutputPath, items, options, tmpOutputFile})

  await extractFileContents({tmpOutputFile, tmpOutputPath, resolvedOutputPath, options})

  await createFileMappings({ resolvedOutputPath })

  await createSvgMappings(resolvedOutputPath)  
  
  logStep(`\nProcess finished successfully\n`.green)
  
  // This is are debug functions
  // intersectionFiles() 

  // Used to copy icons to a different folder
  // copyFilesToFolder({ resolvedOutputPath })

  process.exit(0) 
}
