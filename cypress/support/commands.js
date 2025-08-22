// cypress/support/commands.js
// Custom commands for your tests

// Example custom command - you can add your own as you learn more
Cypress.Commands.add('checkPageLoad', () => {
  cy.window().should('have.property', 'document')
  cy.document().should('have.property', 'readyState', 'complete')
})

// Example: Custom command to check if page loads without errors
Cypress.Commands.add('visitWithoutErrors', (url) => {
  cy.visit(url, {
    onBeforeLoad: (win) => {
      // Capture any console errors
      win.console.error = cy.stub()
    },
    onLoad: (win) => {
      // You can add additional checks here
    }
  })
})

// You can add more custom commands here as you develop more complex tests
// For example:
// Cypress.Commands.add('login', (username, password) => {
//   cy.get('[data-testid="username"]').type(username)
//   cy.get('[data-testid="password"]').type(password)
//   cy.get('[data-testid="login-button"]').click()
// })
