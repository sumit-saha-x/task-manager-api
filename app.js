const express = require('express');
const sequelize = require('./db/db');
const Task = require('./models/task');
const taskRoutes = require('./routes/taskRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // adjust to your route file
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const app = express();
app.use(express.json());
app.use('/api', taskRoutes);

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = app;
