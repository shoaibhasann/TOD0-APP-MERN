import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  isCompleted: {
    type: Boolean,
    default: false
  },

  user: {
     type: Schema.Types.ObjectId,
     ref: 'User',
     required: true
  }
},{
    timestamps: true
});

const Task = model("Task", taskSchema);

export default Task;
