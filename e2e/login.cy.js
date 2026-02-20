import LoginPage from '../pages/LoginPage'

describe('Login Feature', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('Login Success', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest')
    LoginPage.login('Admin', 'admin123')
    cy.wait('@loginRequest')
    cy.url().should('include', 'dashboard')
  })

  it('Login Failed - Wrong Password', () => {
    LoginPage.login('Admin', 'wrongpass')
    cy.contains('Invalid credentials').should('be.visible')
  })
})
