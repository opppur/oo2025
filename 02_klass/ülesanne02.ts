class Cake { // Kookide klass
    name: string;
    ingredients: string[];
    bakingTime: number; // küpsetusaeg minutites

    constructor(name: string, ingredients: string[], bakingTime: number) {
        this.name = name;
        this.ingredients = ingredients;
        this.bakingTime = bakingTime;
    }

    // Meetod retsepti kuvamiseks
    displayRecipe(): void {
        console.log(`Recipe for ${this.name}:`);
        console.log("Ingredients:");
        this.ingredients.forEach((ingredient, index) => {
            console.log(`${index + 1}. ${ingredient}`);
        });
        console.log(`Baking time: ${this.bakingTime} minutes\n`);
    }

    // Meetod küpsetamise alustamiseks
    startBaking(): void {
        console.log(`Baking ${this.name}...`);
        setTimeout(() => {
            console.log(`${this.name} is ready! Enjoy your delicious cake!\n`);
        }, this.bakingTime * 1000); // Küpsetusaeg kasutades setTimeout-i
    }
}

// Kaks näiteretsepti
const chocolateCake = new Cake(
    "Chocolate Cake",
    ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk", "Butter", "Baking Powder"],
    45 // minutites küpsetusaeg
);

const carrotCake = new Cake(
    "Carrot Cake",
    ["Flour", "Sugar", "Carrots", "Eggs", "Vegetable Oil", "Walnuts", "Cinnamon", "Baking Soda"],
    60 // minutites küpsetusaeg
);

// Kuva retseptid
chocolateCake.displayRecipe();
carrotCake.displayRecipe();

// Hakka küpsetama
chocolateCake.startBaking();
carrotCake.startBaking();