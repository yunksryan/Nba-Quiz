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
        .otherwise({
            redirectTo: '/game'
        })

}])

.controller('MyController', function($scope, $http) {

    $scope.questions = [];
    $scope.currentQuestion = null;
    $scope.message = '';
    $scope.done = false;
    var questionIndex = 0;
    var answers = [];

    $scope.postData = function() {
        $http.post('/api/v1/postData', {
            answers: answers
        }).then(function(response) {
            $scope.message = response.data.message;
        });

    };

    $scope.getData = function() {
        $scope.done = false;
        answers = [];
        $http.get('/api/v1/getData').then(function(response) {
            $scope.questions = response.data;

            $scope.currentQuestion = $scope.questions[0];
            $scope.currentImage = questionImages[questionIndex];
        });
    };
    var questionImages = [
        'bulls 1995-1996.jpeg',
        '50-40-90 club.png',
        'kobe meme.jpg',
        'wilt100ptgame.jpg',
        '30-23.jpg',
        'teams.jpg',
        'teams.jpg',
        'hall of fame.jpeg',
        'gsw team.jpg',
        'gs warrior.jpg',
    ];
    $scope.currentImage = "";
    $scope.answerQuestion = function(answerValue) {
        answers.push(answerValue);
        questionIndex = questionIndex + 1;
        $scope.currentQuestion = $scope.questions[questionIndex];
        $scope.currentImage = questionImages[questionIndex];
        if (questionIndex == $scope.questions.length) {
            $scope.done = true;
            $scope.postData();
            questionIndex = 0;
        }
    };
});
