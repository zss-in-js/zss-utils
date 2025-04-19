module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^(\\..+)\\.js$': '$1',
  },
  roots: ['<rootDir>/test'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'html'],
  reporters: [['github-actions', { silent: false }], 'summary'],
};
