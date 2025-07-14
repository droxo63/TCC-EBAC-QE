class CartPage {
  visit() {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  }

  searchProduct(name) {
    cy.get('.tbay-search:visible').first().type(name)
    cy.get('.button-search').eq(1).click()
  }

  selectAttributes(attributes) {
    if (typeof attributes !== 'object' || Array.isArray(attributes)) {
      throw new Error('Formato inválido: attributes deve ser um objeto com size1, size2 e color')
    }
    const { size1, size2, color } = attributes
    if (size1) cy.get(`.button-variable-item-${size1}`).click()
    if (size2) cy.get(`.button-variable-item-${size2}`).click()
    if (color) cy.get(`.button-variable-item-${color}`).click()
  }

  setQuantity(qtd) {
    cy.get('.input-text').clear().type(qtd)
  }

  addToCart() {
    cy.get('.single_add_to_cart_button').click()
  }

  goToCart() {
    cy.get('.woocommerce-message > .button').should('exist').click()
  }

  addComboProducts(combo) {
    combo.forEach(prod => {
      this.visit()
      cy.contains(prod.name, { timeout: 10000 }).should('be.visible').click()
      this.selectAttributes(prod.attributes)
      this.setQuantity(prod.quantity)
      this.addToCart()
      this.goToCart()
    })
  }

  validateDiscountRange(min, max) {
    cy.get('.cart-subtotal .woocommerce-Price-amount').then($el => {
      const total = parseFloat($el.text().replace('R$', '').replace(',', '.').trim())
      expect(total).to.be.within(min, max)
    })
  }
}

export default new CartPage()