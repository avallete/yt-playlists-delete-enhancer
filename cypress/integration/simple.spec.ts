/// <reference types="cypress" />
import 'package-json-to-environment'
import U from '~src/userscript'

describe('test extension', () => {
  // TODO: Add more e2e tests when youtube webapp is not a nightmare to work with cypress anymore
  // as today, it's near impossible to do anything close to end user interactions (like login)
  it('extension load and set run attr to <html> tag', () => {
    cy.visit('https://www.youtube.com')
    cy.get('html').should('have.attr', `data-${U.id}-has-run`)
  })

  // TODO: at least add check of initial console.log message when extension is loaded
  // right now spying console.log with cypress doesn't spy the console.log used by webextension
  // in the mean time, use attr on head element to check that the script has been loaded
})
