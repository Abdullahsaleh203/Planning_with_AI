const Task = require('../models/Task');

// Create a new task
const createTask = async (req, res) => {
    try {
        const { title, description, dueDate, priority, category } = req.body;

        const task = new Task({
            title,
            description,
            dueDate,
            priority,
            category,
            createdBy: req.user._id
        });

        const createdTask = await task.save();
        res.status(201).json(createdTask);
    } catch (error) {
        res.status(500).json({
            message: 'Error creating task',
            error: error.message
        });
    }
};

// Get all tasks for a user
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ createdBy: req.user._id })
            .sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching tasks',
            error: error.message
        });
    }
};

// Get a specific task
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            createdBy: req.user._id
        });

        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching task',
            error: error.message
        });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const { title, description, dueDate, priority, status, category } = req.body;

        const task = await Task.findOne({
            _id: req.params.id,
            createdBy: req.user._id
        });

        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;
        task.priority = priority || task.priority;
        task.status = status || task.status;
        task.category = category || task.category;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({
            message: 'Error updating task',
            error: error.message
        });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            createdBy: req.user._id
        });

        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        await task.remove();
        res.json({ message: 'Task removed successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting task',
            error: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};
