rpg.factory('UserFactory', function UserFactory() {
    var factory = {};
    factory.user = {};

    factory.addUser = function(name, homeland, type) {
        factory.user.name = name;
        factory.user.homeland = homeland;
        factory.user.type = type;
        factory.user.hp = 10;
        factory.user.inventory = [];
        // this.user.push({name: name, homeland: homeland, type: type, hp: 10, inventory: []});

    };
    return factory;
});
