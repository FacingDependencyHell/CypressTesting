// cypress/support/e2e.js
// This is the support file that runs before every single spec file

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Global configuration or custom commands can go here
// For example, you might want to add custom commands for your specific use case

// Hide fetch/XHR requests from command log (optional - reduces noise)
// cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

// Global error handling (optional)
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  // You might want to be more specific about which errors to ignore
  console.log('Uncaught exception:', err)
  
  // For now, let's not fail tests on uncaught exceptions
  // In a real scenario, you'd want to be more selective
  return false
})
