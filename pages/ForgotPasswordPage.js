class ForgotPasswordPage {
  forgotPasswordLink = '.orangehrm-login-forgot-header'
  usernameInput = 'input[name="username"]'
  resetButton = 'button[type="submit"]'

  openForgotPassword() {
    cy.get(this.forgotPasswordLink).click()
  }

  reset(username) {
    cy.get(this.usernameInput).type(username)
    cy.get(this.resetButton).click()
  }
}

export default new ForgotPasswordPage()
