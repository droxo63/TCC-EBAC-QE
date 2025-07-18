const request = require('supertest');
const validateSchema = require('../utils/schemaValidator.js');
const couponSchema = require('../schemas/couponSchema.json');

const BASE_URL = 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3';
const AUTH_HEADER = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy';

describe('API - Cupons', () => {

  // ✅ Cenário 1: Criar cupom com dados válidos
  it('Deve criar um cupom com dados válidos (201 Created)', async () => {
    const couponCode = `Cupom${Date.now()}`;
    const payload = {
      code: couponCode,
      amount: '10.00',
      discount_type: 'fixed_product',
      description: 'Cupom teste automatizado'
    };

    const response = await request(BASE_URL)
      .post('/coupons')
      .set('Authorization', AUTH_HEADER)
      .send(payload);

    expect(response.status).toBe(201);
    expect(response.body.code).toBe(couponCode.toLowerCase());
  });

  // ✅ Cenário 2: Criar cupom sem autenticação
  it('Deve retornar 401 ao tentar criar cupom sem autenticação', async () => {
    const payload = {
      code: `Cupom${Date.now()}`,
      amount: '10.00',
      discount_type: 'fixed_product'
    };

    const response = await request(BASE_URL)
      .post('/coupons') 
      .send(payload);

    expect(response.status).toBe(401);
   expect(response.body.message).toMatch(/permissão|unauthorized/i);

  });

  // ✅ Cenário 3: Criar cupom com código vazio
  it('Deve retornar 400 ao tentar criar cupom com código vazio', async () => {
    const payload = {
      code: '',
      amount: '10.00',
      discount_type: 'fixed_product'
    };

    const response = await request(BASE_URL)
      .post('/coupons')
      .set('Authorization', AUTH_HEADER)
      .send(payload);

    expect(response.status).toBe(400);
    expect(response.body.message).toMatch(/código|code/i);

  });

  // ✅ Cenário 4: Listar todos os cupons existentes
  it('Deve listar todos os cupons (200 OK)', async () => {
    const response = await request(BASE_URL)
      .get('/coupons')
      .set('Authorization', AUTH_HEADER);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    validateSchema(response.body, couponSchema);
  });

});
