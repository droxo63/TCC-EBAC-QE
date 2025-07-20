import CatalogPage from '../pageObjects/CatalogPage.js';

describe('Catálogo de Produtos', () => {
  it('deve listar produtos com sucesso', async () => {
    await expect(CatalogPage.catalogContainer).toBeDisplayed();
  });
});
