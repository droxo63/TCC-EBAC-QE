import cartPage from '../pageObjects/CartPage'

describe('US002 - Testes de adicionar produtos no carrinho', () => {
  beforeEach(() => {
    cartPage.visit()
    cy.fixture('products').as('products')
  })

  it('Add products in the cart with success', function () {
    const product = this.products.successAdd
    cartPage.searchProduct(product.name)
    cartPage.selectAttributes(product.attributes)
    cartPage.setQuantity(product.quantity)
    cartPage.addToCart()
    cartPage.goToCart()
  })

  it('Add more than 10 products in the cart', function () {
    const product = this.products.limitExceed
    cartPage.searchProduct(product.name)
    cartPage.selectAttributes(product.attributes)
    cartPage.setQuantity(product.quantity)
    cartPage.addToCart()
    cartPage.goToCart()
  })

  it('Add products in the cart with total value + R$ 990,01', function () {
    const product = this.products.aboveLimit
    cartPage.searchProduct(product.name)
    cartPage.selectAttributes(product.attributes)
    cartPage.setQuantity(product.quantity)
    cartPage.addToCart()
    cartPage.goToCart()
  })

  it ('Adicionar produtos que somem R$200 ➔ aplicar cupom 10%', function () {
    const combo = this.products.discount200
    cartPage.addComboProducts(combo)
    cartPage.validateDiscountRange(200, 600)
  })

   it('Adicionar produtos que somem R$600 ➔ aplicar cupom 10%', function () {
const product = this.products.discount600[0]
    cartPage.searchProduct(product.name)
    cartPage.selectAttributes(product.attributes)
    cartPage.setQuantity(product.quantity)
    cartPage.addToCart()
    cartPage.goToCart()
    cartPage.validateDiscountRange(200, 600)
  })
})