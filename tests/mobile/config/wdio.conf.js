import { localConf } from './local.conf.js';
import 'dotenv/config';

function getConfig() {
  switch (process.env.ENVIRONMENT) {
    case 'local':
    default:
      return localConf;
  }
}
export const config = getConfig();
