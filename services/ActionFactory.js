rpg.factory("ActionFactory", function ActionFactory($state) {
    var factory={};
    factory.takeAction= function(roomId,direction){
        if(roomId == 1 && direction== "left"){
             $state.go("TrashCan");
        }

    };


    return factory;

})
