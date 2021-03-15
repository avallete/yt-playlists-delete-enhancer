/// <reference types="cypress" />
describe('test extension', () => {
  it('should change utilities page background color after extension load', () => {
    cy.visit('https://example.cypress.io/')
    // if our webextension is loaded the background color should have been changed
    cy.get('#utilities').should('have.css', 'backgroundColor', 'rgb(255, 0, 0)')
  })
})
