const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://saitejualeti:S!_LYZd2ts5w-Vx@cluster0.mg0a9jn.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}