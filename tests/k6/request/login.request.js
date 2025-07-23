import http from 'k6/http';
import { check } from 'k6';

export function login(username, password) {
  const payload = {
    username,
    password,
  };

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const res = http.post('http://lojaebac.ebaconline.art.br/wp-login.php', payload, { headers });

  check(res, {
    'login status is 200': (r) => r.status === 200,
  
  });

  return res;
}

