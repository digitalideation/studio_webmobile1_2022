describe('Searching for Maria Husmann should provide a link to the correct profile page as the first search result.', () => {
  it('passes', () => {
    cy.visit('https://hslu.ch/')
    cy.get('input[placeholder="Suchbegriff eingeben"]').type("Maria Husmann")
    cy.get('#submit-sitesearch').click()
    cy.get('#fl li:first-of-type a').click()
    cy.get('h1 span').contains('Maria')
    cy.get('h1 span').contains('Husmann')

  })
})