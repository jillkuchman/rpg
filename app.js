var rpg = angular.module('rpg', ['ui.router']);

rpg.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/newGame.html",
        controller: "UserCtrl"
    });
    $stateProvider.state('room1', {
        url: "/room1",
        templateUrl: "partials/Room1.html",
        controller: "UserCtrl"
    });


});
