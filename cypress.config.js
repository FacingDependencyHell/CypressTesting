// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Base URL for your tests
    baseUrl: 'https://vladislavbouska.cz',
    
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Test settings
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    
    // Video and screenshot settings
    video: true,
    screenshotOnRunFailure: true,
    
    // Retry settings
    retries: {
      runMode: 2,    // Retry failed tests 2 times when running via cypress run
      openMode: 0    // Don't retry when using cypress open
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // This is where you can add plugins, tasks, etc.
    },
    
    // Spec pattern - where your test files are located
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    // Support file
    supportFile: 'cypress/support/e2e.js'
  },
})
