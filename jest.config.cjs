/** @type {import('jest').Config} */
module.exports = {
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
	moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
};
