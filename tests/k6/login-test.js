import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '2m',
  stages: [
    { duration: '20s', target: 20 },
    { duration: '1m30s', target: 20 }
  ]
};

const users = [
  { username: 'user1_ebac', password: 'psw!ebac@test' },
  { username: 'user2_ebac', password: 'psw!ebac@test' },
  { username: 'user3_ebac', password: 'psw!ebac@test' },
  { username: 'user4_ebac', password: 'psw!ebac@test' },
  { username: 'user5_ebac', password: 'psw!ebac@test' }
];

export default function () {
  const user = users[Math.floor(Math.random() * users.length)];
  const url = 'http://lojaebac.ebaconline.art.br/wp-login.php';
  const payload = `log=${user.username}&pwd=${user.password}&wp-submit=Login`;
  const params = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

  const res = http.post(url, payload, params);

  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta contém Minha Conta': (r) => r.body.includes('Minha conta')
  });

  sleep(1);
}
