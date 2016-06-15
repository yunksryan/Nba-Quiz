'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
        'ngRoute'
    ])

    .config(['$routeProvider', function($routeProvider) {
        console.log('test');

        $routeProvider.when('/game', {
            templateUrl: 'templates/game.html',
            controller: 'MyController'
        })
        .otherwise({redirectTo: '/game'})

    }])

    .controller('MyController', function($scope, $http) {
console.log('controller');
        $scope.questions = [];
        $scope.currentQuestion = null;
        $scope.color = '';
        $scope.message = '';
        $scope.done = false;
        // Initialize to first index
        var questionIndex = 0;
        var answers = [];

        $scope.postData = function() {
            $http.post('/api/v1/postData', {color: $scope.color}).then(function(response) {
                $scope.message = response.data.message;
            });
            $scope.color = '';
        };

        $scope.getData = function() {
            $scope.done = false;
            $http.get('/api/v1/getData').then(function(response) {
                $scope.questions = response.data;
                // Set currentQuestion to be the first question
                $scope.currentQuestion = $scope.questions[questionIndex];
                console.log($scope.currentQuestion);
            });
        };

        $scope.answerQuestion = function(answerValue) {
            console.log('answerQuestion: ' + answerValue);
            answers.push(answerValue);
            questionIndex = questionIndex + 1;
            console.log('questionIndex: ' + questionIndex);
            console.log('currentQuestion: ' + JSON.stringify($scope.questions[questionIndex]));
            $scope.currentQuestion = $scope.questions[questionIndex];
            if (questionIndex == $scope.questions.length) {
                $scope.done = true;
                questionIndex = 0;
                console.log("You are done");
            }
        };
    });
