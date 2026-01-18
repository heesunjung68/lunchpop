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
    { name: "Curry", image: "./images/curry.jpg" }
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