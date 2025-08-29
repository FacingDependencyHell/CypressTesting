describe('First test', () => {
  it('Visits vladislavbouska.cz and checks content', () => {
    cy.visit('https://vladislavbouska.cz')
    cy.contains('What am I all about')
  })
})
