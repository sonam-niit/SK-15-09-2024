const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user._id });
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const newTodo = new Todo({
    ...req.body,
    user: req.user._id
  });
  const savedTodo = await newTodo.save();
  res.status(201).json(savedTodo);
};


exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  if (todo.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  await todo.remove();
  res.json({ message: 'Todo deleted' });
};


exports.updateTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);

  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  if (todo.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;
  const updated = await todo.save();

  res.json(updated);
};
