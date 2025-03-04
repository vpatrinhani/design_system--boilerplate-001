import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

import magicImporter from 'node-sass-magic-importer';
import aliasImporter from 'node-sass-alias-importer';

export const config: Config = {
  namespace: 'mylib',
  taskQueue: 'async',
  buildEs5: true,
  // The source map generation was disabled for now because it was causing an issue on some bundlers liek the one used on NextJS (React), It might be related affect others bundlers as well.
  sourceMap: false,
  // devMode: true,
  hashFileNames: false,
  autoprefixCss: false,
  globalScript: 'src/mylibContext.js',
  transformAliasedImportPaths: true,
  bundles: [
    { components: ['mylib-button'] },
    { components: ['mylib-icon'] },
  ],
  plugins: [
    sass({
      importer: [
        magicImporter({
          cwd: process.cwd(),
        }),
        aliasImporter({
          '@libs': './libs',
        }),
      ],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@com.my-company/mylib',
      proxiesFile: '../../../libs/mylib-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@com.my-company/mylib',
      directivesProxyFile:
        '../../../libs/mylib-angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        '../../../libs/mylib-angular/projects/component-library/src/lib/stencil-generated/index.ts',
      // includeImportCustomElements: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      transformAliasedImportPathsInCollection: true,
    },
    {
      type: 'dist-custom-elements',

      generateTypeDeclarations: true,
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      customElementsExportBehavior: 'auto-define-custom-elements',
      includeGlobalScripts: false,
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  extras: {
    enableImportInjection: true,
  },
};
