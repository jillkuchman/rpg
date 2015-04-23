rpg.factory("ActionFactory", function ActionFactory($state) {
    var factory={};
    factory.takeAction= function(roomId,direction){
        if(roomId == "room1" && direction== "left"){
             $state.go("TrashCan");

        }
        else if(roomId == "room1" && direction == "right") {
            alert("You're out of the alley");
            // $state.go("Alley");
        }
        else if(roomId == "TrashCan" && direction == "back") {
            $state.go("room1");
        }
        else if(roomId == "TrashCan" && direction == "search trash can") {
            alert("okay");
        }
    };


    return factory;

})
