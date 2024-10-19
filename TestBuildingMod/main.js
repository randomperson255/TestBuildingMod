Game.registerMod("testBuildingMod", {
    init: function() {
        // Define the new building's properties
        var newBuilding = {
            name: "Test",
            desc: "This is a test building that produces cookies.",
            basePrice: 500000, // Initial cost
            cookiesPerSecond: 50, // Base production rate
            icon: [22, 12], // Icon location in the spritesheet

            // Function to calculate the production rate based on how many you own
            productionRate: function() {
                return this.amount * this.cookiesPerSecond;
            }
        };

        // Add the new building to the game
        Game.Objects['Test'] = new Game.Object('Test', newBuilding.desc, newBuilding.basePrice, newBuilding.productionRate);

        // Push the new building to the list of buildings
        Game.ObjectsById.push(Game.Objects['Test']);

        // Refresh the store and update buildings to recognize the new one
        Game.BuildingsOwned = Game.ObjectsById.length;
        Game.UpdateBuildings();
        Game.RefreshStore();
    }
});
