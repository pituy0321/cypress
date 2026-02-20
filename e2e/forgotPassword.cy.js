import LoginPage from '../pages/LoginPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'

describe('Forgot Password Feature', () => {

  beforeEach(() => {
    LoginPage.visit()
    ForgotPasswordPage.openForgotPassword()
  })

  it('Reset Password Success', () => {
    cy.intercept('POST', '**/auth/requestPasswordResetCode').as('resetRequest')
    ForgotPasswordPage.reset('Admin')
    cy.wait('@resetRequest')
  })
})
