const Task = require('../models/task');

describe('Task Model Unit Test', () => {
  it('should create a task with default completed = false', async () => {
    const task = await Task.create({ title: 'Test Task' });
    expect(task.completed).toBe(false);
    expect(task.title).toBe('Test Task');
  });
});
