module.exports = {
    testMatch: ['**/src/**/tests/**/*.test.ts'],
    testPathIgnorePatterns: ["/node_modules/"],
    reporters: ["default"],
    globalSetup: "./testSetup.js",
    testEnvironment: "node"
}