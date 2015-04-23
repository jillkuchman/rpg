rpg.controller("Room1Ctrl", function Room1Ctrl($scope, $state, ActionFactory,UserFactory) {
    $scope.ActionFactory = ActionFactory;
    $scope.User=UserFactory.user;


    $scope.takeAction = function(){
        var action = $scope.actionButton;
        $scope.ActionFactory.takeAction(1,action);
        console.log("hq");
    };

});
