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
        controller: "Room1Ctrl"
    });
    $stateProvider.state('TrashCan', {
        url: "/trashcan",
        templateUrl: "partials/TrashCan.html",
        controller: "Room1Ctrl"
    });


});
