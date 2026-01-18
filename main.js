// main.js

const foodItems = [
    { name: "Pizza", image: "./images/pizza.jpg" },
    { name: "Burger", image: "./images/burger.jpg" },
    { name: "Pasta", image: "./images/pasta.jpg" },
    { name: "Sushi", image: "./images/sushi.jpg" },
    { name: "Steak", image: "./images/steak.jpg" },
    { name: "Tacos", image: "./images/tacos.jpg" },
    { name: "Salad", image: "./images/salad.jpg" },
    { name: "Ramen", image: "./images/ramen.jpg" },
    { name: "Fried Chicken", image: "./images/fried_chicken.jpg" },
    { name: "Curry", image: "./images/curry.jpg" },
    { name: "Pho", image: "./images/pho.jpg" },
    { name: "Bibimbap", image: "./images/bibimbap.jpg" },
    { name: "Paella", image: "./images/paella.jpg" },
    { name: "Fish and Chips", image: "./images/fish_and_chips.jpg" },
    { name: "Dumplings", image: "./images/dumplings.jpg" },
    { name: "Soup", image: "./images/soup.jpg" },
    { name: "Sandwich", image: "./images/sandwich.jpg" },
    { name: "Pancakes", image: "./images/pancakes.jpg" },
    { name: "BBQ Ribs", image: "./images/bbq_ribs.jpg" },
    { name: "Burrito", image: "./images/burrito.jpg" }
];

function getRandomFood() {
    const randomIndex = Math.floor(Math.random() * foodItems.length);
    return foodItems[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommendButton');
    const recommendationResult = document.getElementById('recommendationResult');

    if (recommendButton && recommendationResult) {
        recommendButton.addEventListener('click', () => {
            const randomFood = getRandomFood();
            recommendationResult.innerHTML = `
                <div class="food-card">
                    <h2>${randomFood.name}</h2>
                    <img src="${randomFood.image}" alt="${randomFood.name}" />
                </div>
            `;
        });
    }
});