import express, { json, urlencoded } from 'express';
import { setup, serve } from 'swagger-ui-express';

import { RegisterRoutes } from './spec/routes';
import spec from './spec/swagger.json';

export const app = express();

app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(json());
app.use('/docs', serve, setup(spec));

RegisterRoutes(app);
