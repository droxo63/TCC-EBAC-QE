describe('US002 - Testes de adicionar produtos no carrinho', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos')
  })
  it('Add products in the cart with success', () => {
    cy.get('.search>.tbay-search-form>.form-ajax-search>.form-group>.input-group>.tbay-search').type('Aero Daily Fitness Tee')
    cy.get('.button-search').eq(1).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.input-text').clear().type('9')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'no seu carrinho')
    cy.get('.woocommerce-message > .button').should("exist").click()
  });

  it('Add more than 10 products in the cart', () => {
    cy.get('.search>.tbay-search-form>.form-ajax-search>.form-group>.input-group>.tbay-search').type('Lando Gym Jacket')
    cy.get('.button-search').eq(1).click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type('11')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').should("exist").click()
    // cy.get('.woocommerce-error').should('contain', 'limite de 10 unidades')
  });
  it('Add products in the cart with total value + R$ 990,01', () => {
    cy.get('.search>.tbay-search-form>.form-ajax-search>.form-group>.input-group>.tbay-search').type('Lando Gym Jacket')
    cy.get('.button-search').eq(1).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type('11')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').should("exist").click()
    // cy.get('.woocommerce-error').should('contain', 'valor total ultrapassa R$ 990,00')
  });

   it('Adicionar produtos que somem R$200 ➔ aplicar cupom 10%', () => {
    // Adiciona produtos ao carrinho
    cy.contains('Atlas Fitness Tank').click()
    cy.get('.button-variable-item-L').click() 
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click() 
     cy.get('.input-text').clear().type('5') 
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    cy.contains('Apollo Running Short').click()
    cy.get('.button-variable-item-32').click()
    cy.get('.button-variable-item-34').click()
    cy.get('.button-variable-item-Black').click()
      cy.get('.input-text').clear().type('5') 
    cy.get('.single_add_to_cart_button').click()
    // Ir para o carrinho
    cy.get('.woocommerce-message > .button').click()
    // Validar se o total está entre R$200 e R$600
    cy.get('.cart-subtotal .woocommerce-Price-amount').then($el => {
      const total = parseFloat($el.text().replace('R$', '').replace(',', '.').trim())
      expect(total).to.be.within(200, 600)
    })
    // Validar que o desconto de 10% foi aplicado
    //cy.get('.cart-discount .woocommerce-Price-amount').should('exist')
    /* Validar que o valor com desconto é 10% menor
    cy.get('strong > .woocommerce-Price-amount > bdi').then($el => {
      const totalComDesconto = parseFloat($el.text().replace('R$', '').replace(',', '.').trim())
      cy.get('.cart-subtotal > td > .woocommerce-Price-amount > bdi').then($sub => {
        const subtotal = parseFloat($sub.text().replace('R$', '').replace(',', '.').trim())
        const esperado = subtotal * 0.9
        expect(totalComDesconto).to.be.closeTo(esperado, 0.05)
      })
    }) */
  })

   it('Adicionar produtos que somem R$600 ➔ aplicar cupom 10%', () => {
    // Repete lógica acima, mas adicionando produtos mais caros
    cy.get('.orderby').select('Ordenar por preço: maior para menor')
    cy.contains('Ingrid Running Jacket').click()
    cy.get('.button-variable-item-M').click()
     cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(5) 
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    // Validar subtotal entre R$200 e R$600
    cy.get('.cart-subtotal .woocommerce-Price-amount').then($el => {
      const total = parseFloat($el.text().replace('R$', '').replace(',', '.').trim())
      expect(total).to.be.within(200, 600)
    })
    // Validar que o desconto de 10% foi aplicado
    //cy.get('.cart-discount .woocommerce-Price-amount').should('exist')
    /* Validar que o valor com desconto é 10% menor
    cy.get('strong > .woocommerce-Price-amount > bdi').then($el => {
      const totalComDesconto = parseFloat($el.text().replace('R$', '').replace(',', '.').trim())
      cy.get('.cart-subtotal > td > .woocommerce-Price-amount > bdi').then($sub => {
        const subtotal = parseFloat($sub.text().replace('R$', '').replace(',', '.').trim())
        const esperado = subtotal * 0.9
        expect(totalComDesconto).to.be.closeTo(esperado, 0.05)
      })
    }) */ 
      })
    })
  
