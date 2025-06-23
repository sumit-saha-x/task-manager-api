const express = require('express');
const sequelize = require('./db/db');
const Task = require('./models/task');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/api', taskRoutes);

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = app;
