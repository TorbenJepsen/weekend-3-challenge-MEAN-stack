const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {type: String, required: true},
    completed: {type: Boolean}
});

module.exports = mongoose.model('tasks', taskSchema);