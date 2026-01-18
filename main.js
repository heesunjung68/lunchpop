// main.js

const foodItems = [
    { name: "Pizza", image: "./images/pizza.svg" },
    { name: "Burger", image: "./images/burger.svg" },
    { name: "Pasta", image: "./images/pasta.svg" },
    { name: "Sushi", image: "./images/sushi.svg" },
    { name: "Steak", image: "./images/steak.svg" },
    { name: "Tacos", image: "./images/tacos.svg" },
    { name: "Salad", image: "./images/salad.svg" },
    { name: "Ramen", image: "./images/ramen.svg" },
    { name: "Fried Chicken", image: "./images/fried_chicken.svg" },
    { name: "Curry", image: "./images/curry.svg" }
];

function getRandomFood() {
    const randomIndex = Math.floor(Math.random() * foodItems.length);
    return foodItems[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommendButton');
    const dishNameElement = document.getElementById('dishName');
    const dishImageElement = document.getElementById('dishImage');

    if (recommendButton && dishNameElement && dishImageElement) {
        recommendButton.addEventListener('click', () => {
            const randomFood = getRandomFood();
            dishNameElement.textContent = randomFood.name;
            dishImageElement.src = randomFood.image;
            dishImageElement.alt = randomFood.name;
            dishImageElement.style.display = 'block'; // Make image visible
        });
    }
});