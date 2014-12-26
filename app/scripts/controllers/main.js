'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope,myfact) {
    $scope.todos = [];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.name=myfact;
  });