class LoginPage {
  usernameInput = 'input[name="username"]'
  passwordInput = 'input[name="password"]'
  loginButton = 'button[type="submit"]'

  visit() {
    cy.visit('/web/index.php/auth/login')
  }

  login(username, password) {
    cy.get(this.usernameInput).type(username)
    cy.get(this.passwordInput).type(password)
    cy.get(this.loginButton).click()
  }
}

export default new LoginPage()
