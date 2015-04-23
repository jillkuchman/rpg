rpg.controller("UserCtrl", function UserCtrl($scope, $state, UserFactory) {
    $scope.UserFactory=UserFactory;
    $scope.User=UserFactory.user;
    // $scope.worstNightmare = 0;
    $scope.addUser= function(){
        var name =  $scope.userName;
        var homeland= $scope.userHomeland;
        var type = $scope.userType;
        $scope.UserFactory.addUser(name, homeland, type);
        $scope.userName = null;
        $scope.userHomeland = null;
        $scope.userType = null;
        $state.go('room1', {roomId: 1});

    };
});
