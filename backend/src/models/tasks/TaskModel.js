import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        unique: true,
    },

    description: {
        type: String,
        default: "No descritpion",
    },

    dueDate: {
        type: Date,
        default: Date.now(),
    },

    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },

    completed: {
        type: Boolean,
        default: false,
    },

    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low",
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
},
    { timestamps: true }//creates a date for when a task is created or updated
);

const TaskModel = mongoose.model("Task", TaskSchema);//creates a document or table for tasks

export default TaskModel;