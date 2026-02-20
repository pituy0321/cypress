class DashboardPage {
  directoryMenu = 'a[href*="viewDirectory"]'

  openDirectory() {
    cy.get(this.directoryMenu).click()
  }
}

export default new DashboardPage()
