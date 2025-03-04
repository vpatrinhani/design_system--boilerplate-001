## Requirements

* The svgs must not have multiple colors
* The svgs must have all paths united, if they are separate it will fail to generate
* If you want a smoother experience, test them in the [https://icomoon.io/](icomoon) website beforehand, by adding them to a set and then just clicking on the generate font button.
* There is **NO WAY** of fixing the svgs to generate correctly if they don't generate in icomoon beforehand.

## How to use the icon generator:

* Place the icons you want to update under mylib-core-styles/icons/baseSvgs
* Cd into mylib-core-styles
* Run the following command: npm run generate-icons
* Wait for the script to finish
* Done, now you just have to check if the icons generated correctly

## Troubleshooting

* There is a DEBUG mode, you have to turn it on in the file under mylib-core-styles/src/lib/utils/generateIconsExecutor.js, this will make the browser headed and you will be able to see what is happening under the hood.
* For now the code does not support any of the modals that appear for multiple strokes or multiple color SVGS. There is some commented code in the script which you can uncomment and try to get rid of the modals that appeared.
* If there are modals appearing, most likely there is something wrong with the SVGS you are using to generate the fonts.
