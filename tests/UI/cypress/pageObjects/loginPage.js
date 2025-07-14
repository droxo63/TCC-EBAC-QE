
class LoginPage {
  visit() {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account')
  }

 

  login(username, password) {
     cy.get('#username').clear().type(username)
     cy.get('#password').clear().type(password)
     cy.get('.woocommerce-form > .button').click()
  }

  assertLoginSuccess(username) {
    cy.contains(`Olá, ${username}`).should('be.visible')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', `Olá, ${username}`)
  }

  assertLoginError(msg) {
    cy.contains('Erro:').should('be.visible')
    cy.get('.woocommerce-error').should('contain', msg)
  }
}
export default new LoginPage()