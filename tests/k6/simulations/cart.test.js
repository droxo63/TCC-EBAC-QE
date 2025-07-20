import { sleep, group } from 'k6';
import { SharedArray } from 'k6/data';
import { login } from '../request/login.request.js';
import { addToCart } from '../request/cart.request.js';

const users = new SharedArray('usuarios', () => JSON.parse(open('../data/usuarios.json')));

export const options = {
  stages: [
    { duration: '20s', target: 20 },   // ramp-up
    { duration: '1m40s', target: 20 }, // sustentação
  ],
};


export default function () {
  const user = users[__VU % users.length];

  group('Login + Add to Cart', () => {
    login(user.username, user.password);
    addToCart();
  });

  sleep(1);
}
