const express = require('express');
const router = express.Router();

const Task = require('../models/task.schema');

const taskList = [];

router.get('/', (req, res) => {
  Task.find({}).sort('completed')
  .then((dataFromDatabase) => {
      console.log('data from database', dataFromDatabase);
      res.send(dataFromDatabase);
  })
  .catch((error) => {
      console.log('error with Task.find', error);
      res.sendStatus(500);
  });
});

router.post('/', (req, res) => {
    const taskToAdd = req.body;
    Task.create(taskToAdd)
    .then((dataFromDatabase) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error posting', error);
        res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
    Task.findByIdAndUpdate(req.body._id, req.body)
    .then((dataFromDatabase) => {
        res.sendStatus(201);
    })
});

router.delete('/', (req, res) => {
    Task.findByIdAndRemove(req.query._id)
    .then((dataFromDatabase) => {
        res.sendStatus(205);
    })
});

module.exports = router;