/* eslint-disable */
module.exports = {
  displayName: 'mylib-core-styles',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/mylib-core-styles',
  reporters: [
    "default",
    ["jest-junit", {"outputDirectory": "./test-reports/libs/mylib-core-styles", "outputName": "report.xml"}]
  ],
};
