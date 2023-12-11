import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
   preset: "ts-jest",
   testEnvironment: "node",
   testMatch: [
      '**/?(*.)+(micro|integration).[jt]s?(x)',
   ],
   testPathIgnorePatterns: [
      '/node_modules/',
      '/build/',
      '/tsoa-generated/',
      '/coverage/',
   ],
   collectCoverageFrom: [
      '**/*.ts',
      '!*.config.*',
      '!**/tsoa-generated/**/*.ts',
      '!**/jest-extend/*.d.ts',
   ],
   // setupFiles: ['./src/configs/ioc.ts'],
   setupFilesAfterEnv: [
      './src/jest-extend/matchers.ts',
   ],
   globalSetup: '/work/service/beforeAllTests.ts',

   // Settings for failing when threshold is not met:
   // Ref: https://stackoverflow.com/q/58528542/411428
   // coverageThreshold: {
   //    global: {
   //       branches: 95,
   //       functions: 95,
   //       lines: 95,
   //       statements: 95
   //    }
   // },
}

export default config;
