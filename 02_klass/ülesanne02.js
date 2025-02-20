var Cake = /** @class */ (function () {
    function Cake(name, ingredients, bakingTime) {
        this.name = name;
        this.ingredients = ingredients;
        this.bakingTime = bakingTime;
    }
    // Meetod retsepti kuvamiseks
    Cake.prototype.displayRecipe = function () {
        console.log("Recipe for ".concat(this.name, ":"));
        console.log("Ingredients:");
        this.ingredients.forEach(function (ingredient, index) {
            console.log("".concat(index + 1, ". ").concat(ingredient));
        });
        console.log("Baking time: ".concat(this.bakingTime, " minutes\n"));
    };
    // Meetod küpsetamise alustamiseks
    Cake.prototype.startBaking = function () {
        var _this = this;
        console.log("Baking ".concat(this.name, "..."));
        setTimeout(function () {
            console.log("".concat(_this.name, " is ready! Enjoy your delicious cake!\n"));
        }, this.bakingTime * 1000); // Küpsetusaeg kasutades setTimeout-i
    };
    return Cake;
}());
// Kaks näiteretsepti
var chocolateCake = new Cake("Chocolate Cake", ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk", "Butter", "Baking Powder"], 45 // minutites küpsetusaeg
);
var carrotCake = new Cake("Carrot Cake", ["Flour", "Sugar", "Carrots", "Eggs", "Vegetable Oil", "Walnuts", "Cinnamon", "Baking Soda"], 60 // minutites küpsetusaeg
);
// Kuva retseptid
chocolateCake.displayRecipe();
carrotCake.displayRecipe();
// Hakka küpsetama
chocolateCake.startBaking();
carrotCake.startBaking();
