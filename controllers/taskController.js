const Task = require('../models/task');

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  await task.update(req.body);
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  await task.destroy();
  res.status(204).send();
};
