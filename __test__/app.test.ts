/* eslint-disable no-undef */
import request from 'supertest';
import { app } from '../src/app';

describe('Test app init route', () => {
  test('Method GET', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

describe('Get all users', () => {
  test('List of users', async () => {
    const result = await request(app).get('/users').send();
    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});
