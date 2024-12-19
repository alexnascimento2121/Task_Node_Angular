const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
const tasksRoutes = require('./routes/tasks');
app.use('/api/tasks', tasksRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
