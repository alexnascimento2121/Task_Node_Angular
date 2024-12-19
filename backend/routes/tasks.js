const express = require('express'); // Importa o módulo Express
const router = express.Router();

let tasks = []; // Armazenamento simples na memória

// Retorna todas as tarefas
router.get('/', (req, res) => {
  res.json(tasks);
});

// Adiciona uma nova tarefa
router.post('/', (req, res) => {
  const { title } = req.body;
  const newTask = { id: Date.now(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Marca uma tarefa como concluída
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (task) {
    task.completed = true;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Remove uma tarefa
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id !== parseInt(id));
  res.json({ message: 'Task deleted' });
});

module.exports = router;
