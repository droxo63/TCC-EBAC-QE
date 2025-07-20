import http from 'k6/http';
import { check } from 'k6';

export function addToCart() {
  const payload = {
    attribute_pa_tamanho: 's',
    attribute_pa_cor: 'preto',
    quantity: '1',
    'add-to-cart': '31', 
  };

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const res = http.post('http://lojaebac.ebaconline.art.br/?add-to-cart=31', payload, { headers });

  check(res, {
    'add-to-cart status is 200': (r) => r.status === 200,
   // 'cart confirmation': (r) => r.body.includes('no seu carrinho'),
  });
}
