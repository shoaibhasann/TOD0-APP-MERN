import Task from "../models/task.model.js";

const createTask = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { title, description } = req.body;

    if ((!title, !description)) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const task = await Task.create({
      title,
      description,
      user: id,
    });

    if (!task) {
      res.status(400).json({
        success: false,
        message: "Failed to add task",
      });
    }

    res.status(201).json({
      success: true,
      message: "Task added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getMyTask = async (req, res, next) => {
  try {
    const { id } = req.user;

    const allTask = await Task.find({ user: id });

    res.status(200).json({
      success: true,
      allTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(400).json({
        success: false,
        message: "Task not found",
      });
    }

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: 'Task deleted'
    })
  } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
  }
};

export { createTask, getMyTask, updateTask, deleteTask };
