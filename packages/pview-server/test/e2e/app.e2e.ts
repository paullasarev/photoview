import * as supertest from 'supertest';
import { app } from '../../src/app';

describe('AppController (e2e)', () => {
  // const app: any = null;

  beforeEach(async () => {});

  it('/ (GET)', async () => {
    const request = supertest(app);
    const result = await request.get('/');
    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello world!');
  });
});
