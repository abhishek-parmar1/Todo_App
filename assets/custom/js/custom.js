var ngTodo = angular.module('ngTodo', ['ngStorage']);

ngTodo.controller('mainController',function($scope,$localStorage){
    
    $scope.todoArray = [];
    
    if($localStorage.todoArray == undefined){
            $localStorage.todoArray = $scope.todoArray;
        }
    else{
        $scope.todoArray = $localStorage.todoArray;
    }
    
    $scope.addTodo = function(newTodo){
        $scope.todoArray.splice(0,0, { title : newTodo.name, details : newTodo.details});
        $localStorage.todoArray = $scope.todoArray;
    }
    
    $scope.removeTodo = function(index){
        $scope.todoArray.splice(index,1);
        $localStorage.todoArray = $scope.todoArray;
    }
});