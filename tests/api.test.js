const request = require('supertest');
const app = require('../app');
const sequelize = require('../db/db');
const Task = require('../models/task');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('API Tests', () => {
  it('POST /api/tasks - should create a new task', async () => {
    const res = await request(app).post('/api/tasks').send({ title: 'New Task' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('New Task');
  });

  it('GET /api/tasks - should return all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('PUT /api/tasks/:id - should update a task', async () => {
    const task = await Task.create({ title: 'Old Task' });
    const res = await request(app).put(`/api/tasks/${task.id}`).send({ title: 'Updated' });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated');
  });

  it('DELETE /api/tasks/:id - should delete a task', async () => {
    const task = await Task.create({ title: 'Delete Me' });
    const res = await request(app).delete(`/api/tasks/${task.id}`);
    expect(res.statusCode).toBe(204);
  });
});
