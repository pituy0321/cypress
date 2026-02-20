import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

describe('Directory Feature', () => {

  beforeEach(() => {
    cy.intercept('POST', '**/auth/validate').as('loginReq')
    LoginPage.visit()
    LoginPage.login('Admin', 'admin123')
    cy.wait('@loginReq')
  })

  it('Open Directory Menu', () => {
    DashboardPage.openDirectory()
    cy.contains('Directory').should('be.visible')
  })
})
