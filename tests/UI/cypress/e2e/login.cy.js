import loginPage from '../pageObjects/LoginPage'

describe('Login tests', () => {
  beforeEach(() => {
    loginPage.visit()
    cy.fixture('users').as('users')
  })

  it('Login with valid credentials', function () {
    const user = this.users.validUser
    loginPage.login(user.username, user.password)
    loginPage.assertLoginSuccess(user.username)
  })

  it('Login with invalid password', function () {
    const user = this.users.invalidPassword
    loginPage.login(user.username, user.password)
    loginPage.assertLoginError('Erro:')
  })

  it('Try login 3 times with invalid credentials', function () {
    const user = this.users.invalidPassword
    for (let i = 0; i < 3; i++) {
      loginPage.login(user.username, user.password)
      loginPage.assertLoginError('Erro:')
    }
   // cy.contains('conta foi bloqueada').should('be.visible')
  })

  it('Login with inactive account', function () {
    const user = this.users.inactiveUser
    loginPage.login(user.username, user.password)
    loginPage.assertLoginError('usuário usuario_inativo não está registrado')
  })
})