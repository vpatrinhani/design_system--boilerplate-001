module.exports = {
  testRunner: 'jasmine2',
  testMatch: [ '**/+(*.)+(spec|test).+(ts|js)?(x)' ],
  testPathIgnorePatterns: ['/.cache', '/.vscode', '/dist', '/node_modules', "\\.e2e\\.(js|ts)x?$"],
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  // testEnvironment: 'jsdom',
  coverageReporters: ["clover", "json", "lcov", "html", "cobertura", "text", "text-summary"],
  coveragePathIgnorePatterns: ['.d.ts', '.e2e.ts'],
  reporters: ["default"]
};
