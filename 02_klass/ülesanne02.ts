class Cake {
    name: string;
    ingredients: string[];
    bakingTime: number; // baking time in minutes

    constructor(name: string, ingredients: string[], bakingTime: number) {
        this.name = name;
        this.ingredients = ingredients;
        this.bakingTime = bakingTime;
    }

    // Method to display the recipe
    displayRecipe(): void {
        console.log(`Recipe for ${this.name}:`);
        console.log("Ingredients:");
        this.ingredients.forEach((ingredient, index) => {
            console.log(`${index + 1}. ${ingredient}`);
        });
        console.log(`Baking time: ${this.bakingTime} minutes\n`);
    }

    // Method to start baking
    startBaking(): void {
        console.log(`Baking ${this.name}...`);
        setTimeout(() => {
            console.log(`${this.name} is ready! Enjoy your delicious cake!\n`);
        }, this.bakingTime * 1000); // Simulate baking time using setTimeout
    }
}

// Create two instances of the Cake class
const chocolateCake = new Cake(
    "Chocolate Cake",
    ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk", "Butter", "Baking Powder"],
    45 // Baking time in minutes
);

const carrotCake = new Cake(
    "Carrot Cake",
    ["Flour", "Sugar", "Carrots", "Eggs", "Vegetable Oil", "Walnuts", "Cinnamon", "Baking Soda"],
    60 // Baking time in minutes
);

// Display recipes
chocolateCake.displayRecipe();
carrotCake.displayRecipe();

// Start baking
chocolateCake.startBaking();
carrotCake.startBaking();