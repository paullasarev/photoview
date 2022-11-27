import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { parseNumber } from './utils';

export const getConfig = () => {
  const rawEnv = config();
  const exp = expand(rawEnv);
  const env = exp.parsed || {};

  return {
    port: parseNumber(env.PORT, 3000),
    host: env.HOST ?? '127.0.0.1',
    // database: {
    //   host: env.DATABASE_HOST,
    //   port: parseNumber(env.DATABASE_PORT, 5432),
    // },
  };
};
