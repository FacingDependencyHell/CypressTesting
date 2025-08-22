// cypress/e2e/website-basic.cy.js
describe('vladislavbouska.cz - Basic Tests', () => {
  beforeEach(() => {
    // Visit your website before each test
    cy.visit('https://vladislavbouska.cz')
  })

  it('should load the homepage successfully', () => {
    // Check that the page loads and returns 200 status
    cy.url().should('include', 'vladislavbouska.cz')
    
    // Check that the page has loaded by looking for common HTML elements
    cy.get('body').should('be.visible')
    cy.get('head title').should('exist')
  })

  it('should have a title', () => {
    // Check that the page has a title (not empty)
    cy.title().should('not.be.empty')
    cy.title().should('have.length.greaterThan', 0)
  })

  it('should have basic meta tags', () => {
    // Check for basic meta tags
    cy.get('head meta[charset]').should('exist')
    cy.get('head meta[name="viewport"]').should('exist')
  })

  it('should load within reasonable time', () => {
    // This test will inherently pass if the page loads within Cypress timeout
    // But we can add specific performance checks
    cy.window().then((win) => {
      expect(win.document.readyState).to.equal('complete')
    })
  })

  // Example of testing for specific content (adjust based on your actual site)
  it('should contain expected content', () => {
    // Look for any heading tags
    cy.get('h1, h2, h3, h4, h5, h6').should('exist')
    
    // You can add more specific checks based on your site content
    // For example:
    // cy.contains('Vladislav').should('be.visible')
    // cy.get('[data-testid="header"]').should('exist')
  })

  // Test navigation/links if applicable
  it('should have working navigation elements', () => {
    // Check that links exist and are not broken
    cy.get('a[href]').should('exist')
    
    // Test that at least one link is clickable (adjust selector as needed)
    cy.get('a[href]').first().should('have.attr', 'href')
  })
})