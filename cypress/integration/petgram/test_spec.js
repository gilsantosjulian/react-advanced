/* global describe, it, expect, cy */

describe('Petgram', () => {
  it('App works', () => {
    cy.visit('/')
  })

  it('Category navigation and view photos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Nav Bar navigation to home', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  it('Not registered users can see register and login form to go Favs page', () => {
    cy.visit('/login')
    cy.get('form').should('have.length', 2)
  })
})