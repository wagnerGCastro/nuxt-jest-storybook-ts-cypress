// load type definitions from Cypress module
/// <reference types="cypress" />

// eslint-disable-line
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>
  }
}
