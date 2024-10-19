// Name: Test Building
// Description: This is a custom building mod for Cookie Clicker.
// Author: randomperson255
// Version: 1.0

let buildingName = "Test Building";
let buildingDescription = "Generates cookies at a steady rate.";
let buildingCost = 100; // Cost in cookies
let buildingProduction = 1; // Cookies produced per second
let buildingCount = 0; // Count of buildings owned

// Function to add the new building to the game
function addBuilding() {
    if (!Game.Objects[buildingName]) {
        Game.Objects[buildingName] = {
            name: buildingName,
            description: buildingDescription,
            price: buildingCost,
            baseCps: buildingProduction,
            amount: buildingCount,
            getCps: function() {
                return this.baseCps * this.amount;
            },
            // Update the production based on the number of buildings owned
            update: function() {
                this.amount = Game.Objects[buildingName].amount;
            }
        };
    }
}

// Register the building in the game
addBuilding();

// Log a message to the console for debugging
console.log(`${buildingName} has been added to the game!`);
