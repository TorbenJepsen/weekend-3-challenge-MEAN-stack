console.log('client.js has been loaded');

var app = angular.module('TaskApp', []);


app.controller('TaskController', ['$http', function ($http) {
    console.log('TaskController has been loaded');
    var self = this;

    self.task = [{}];
    self.taskList = [];
    self.newTask = {};
 


    self.getTask = function () {
        $http({
            method: 'GET',
            url: '/task'
        })
            .then(function (response) {
                console.log(response);
                self.taskList = response.data;
                
            })
            .catch(function (error) {
                console.log('error on /task GET', error);
            });

    };

    self.getTask();

    self.deleteTask = function (task) {
        $http({
            method: 'DELETE',
            url: '/task',
            params: task
        })
        .then(function (response) {
            self.getTask();
        });

    }

    self.completeTask = function (task) {
        task.completed = !task.completed
        $http({
            method: 'PUT',
            url: '/task',
            data: task 
        })
        .then(function (response) {
            self.getTask();
        });
    }

    self.addTask = function () {
        $http({
            method: 'POST',
            url: '/task',
            data: newTask = {task: self.newTask.task, 
            completed: false}
        })
            .then(function (response) {
                console.log(response);
                self.getTask();
            });


    }
}]);