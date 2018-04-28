const express = require('express');
const app = express();
const mongoose =require('mongoose');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.route');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/task', taskRouter);

const databaseUrl = 'mongodb://localhost:27017/to_do_list';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose is fired up! on ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error);
});

app.listen(PORT, () => {
    console.log(`Turnin and Burnin on port ${PORT}`)
});