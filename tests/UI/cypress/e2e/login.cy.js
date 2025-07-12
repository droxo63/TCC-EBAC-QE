describe('Login tests', () => {

  beforeEach(() => {
     cy.visit('http://lojaebac.ebaconline.art.br/produtos')
  });
  it('Login with valids credentials', () => {
   
    cy.get('#username').type('user1_ebac')
    cy.get('#password').type('psw!ebac@test')
    cy.get('.woocommerce-form > .button').click()
    cy.contains('Olá, user1_ebac').should('be.visible')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, user1_ebac')
  })

  it('Login with invalid password', () => {

    cy.get('#username').type('user1_ebac')
    cy.get('#password').type('wrongpassword')
    cy.get('.woocommerce-form > .button').click()
    cy.contains('Erro:').should('be.visible')
    cy.get('.woocommerce-error > li > :nth-child(1)').should('contain', 'Erro')
  })

    it('Try login 3 times with invalid credentials', () => {
      for(let i=0; i<3; i++){
   
        cy.get('#username').type('user1_ebac')
        cy.get('#password').type('wrongpassword')
        cy.get('.woocommerce-form > .button').click()
        cy.contains('Erro:').should('be.visible')
      }
      cy.contains('conta foi bloqueada').should('be.visible')
    })

    it('Login with a inactive account', () => {
     
    cy.get('#username').type('usuario_inativo')
    cy.get('#password').type('psw_inativo')
    cy.get('.woocommerce-form > .button').click()
    cy.contains('Erro: O usuário usuario_inativo não está registrado neste site').should('be.visible')
    })
})