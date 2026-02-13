const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  retries: {
    runMode: 2,
    openMode: 0
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://www.ceiia.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
