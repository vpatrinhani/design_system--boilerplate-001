/* eslint-disable */
module.exports = {
  preset: '@stencil/core/testing',
  testRunner: 'jasmine2',
  testPathIgnorePatterns: ['/.cache', '/.stencil', '/.vscode', '/dist', '/node_modules', '/www', "\\.e2e\\.(js|ts)x?$"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/components/**/story/**",
    "!src/components/**/test/**",
    "!src/core/**/*.{js,jsx}",
    "!src/*.*",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/bindings/**",
    "!**/dist/**",
    "!**/loader/**",
    "!src/**/_*.ts"
  ],
  coverageDirectory: '../../coverage/libs/mylib',
  transform: {
    '^.+\\.svg$': "<rootDir>/src/utils/svgTransform.js",
  },
  resolver: '@nrwl/jest/plugins/resolver',
  coverageReporters: ["clover", "json", "lcov", "html", "cobertura", "text", "text-summary"],
  coveragePathIgnorePatterns: ['.d.ts', '.e2e.ts'],
  // coverageThreshold: {
  //   "global": {
  //     "statements": 74,
  //     "branches": 66,
  //     "functions": 73,
  //     "lines": 73,
  //   }
  // },
  reporters: [
    "default",
    ["jest-junit", {"outputDirectory": "./test-reports/libs/mylib", "outputName": "report.xml"}]
  ],
  setupFilesAfterEnv: [ './jestSetup.js' ],
  globalSetup: "./jestGlobalSetup.js"
};
