/* eslint-disable */
module.exports = {
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.{js,jsx,ts,tsx}"
  ],
  coverageDirectory: '../../coverage/libs/mylib-core-js',
  reporters: [
    "default",
    ["jest-junit", {"outputDirectory": "./test-reports/libs/mylib-core-js", "outputName": "report.xml"}]
  ],
};
