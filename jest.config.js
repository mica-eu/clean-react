module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
