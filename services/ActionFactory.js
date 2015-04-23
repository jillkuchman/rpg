rpg.factory("ActionFactory", function ActionFactory($state) {
    var factory = {};
    factory.takeAction = function(roomId, input){
        switch(roomId) {
            case "room1":
                switch(input) {
                    case ("left"):
                        $state.go("TrashCan");
                        break;
                    case ("right"):
                        $state.go("outOfAlley");
                        break;
                    case ("i"):
                        $(".inventory").show();
                    default:
                        $(".new-command").show();
                }
                break;
            case "TrashCan":
                switch(input) {
                    case ("search"):
                        $state.go("TrashCan.search");
                        break;
                    case ("back"):
                        $state.go("room1");
                        break;
                    default:
                        $(".new-command").show();
                }
            }
    };

    factory.takeObject = function(response) {

    };

    return factory;
});
