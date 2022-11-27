import 'module-alias/register';
import 'reflect-metadata';

import { getConfig } from './config';
import { app } from './app';

const config = getConfig();

app.listen(config.port, config.host, () => {
  console.log(`running app on host ${config.host} port ${config.port}`);
  console.log(`API doc on http://${config.host}:${config.port}/docs`);
});
