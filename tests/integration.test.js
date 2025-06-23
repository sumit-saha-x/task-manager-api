const Task = require('../models/task');

describe('Task Integration Test', () => {
  it('should perform full CRUD', async () => {
    const task = await Task.create({ title: 'Integration Task' });
    expect(task.id).toBeDefined();

    task.completed = true;
    await task.save();
    expect(task.completed).toBe(true);

    await task.destroy();
    const found = await Task.findByPk(task.id);
    expect(found).toBeNull();
  });
});
