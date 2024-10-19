// Name: Test Building
// Description: This is a custom building mod for Cookie Clicker.
// Author: Your Name
// Version: 1.0

// Define your building properties
let buildingName = "Test Building";
let buildingDescription = "Generates cookies at a steady rate.";
let buildingCost = 100; // Cost in cookies
let buildingProduction = 1; // Cookies produced per second

// Function to add the new building to the game
function addBuilding() {
    // Ensure Game.Objects exists
    if (!Game.Objects) {
        console.error("Game.Objects is not defined.");
        return;
    }

    // Check if the building already exists
    if (!Game.Objects[buildingName]) {
        // Create a new object for the building
        let newBuilding = {
            name: buildingName,
            description: buildingDescription,
            price: buildingCost,
            baseCps: buildingProduction,
            amount: 0, // Start with 0 buildings owned
            unlock: function() { return true; }, // Always unlocked for testing
            getCps: function() {
                return this.baseCps * this.amount; // Calculate total CPS
            },
            update: function() {
                this.amount = Game.Objects[this.name].amount; // Update amount owned
            }
        };

        // Add the building to Game.Objects
        Game.Objects[buildingName] = newBuilding;

        // Log to console for debugging
        console.log(`${buildingName} has been added to the game!`);
        console.log(Game.Objects); // Log all objects to see if it's included

        // Force refresh of the game objects
        newBuilding.update();
    } else {
        console.log(`${buildingName} already exists!`);
    }
}

// Call the function to add the building
addBuilding();
