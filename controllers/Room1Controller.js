rpg.controller("Room1Ctrl", function Room1Ctrl($scope, $state, ActionFactory, UserFactory) {
    $scope.ActionFactory = ActionFactory;
    $scope.User=UserFactory.user;


    $scope.takeAction = function(){
        var action = $scope.actionButton;
        var roomName = $state.current.name;
        $scope.ActionFactory.takeAction(roomName, action);
        console.log(action);
    };

});
