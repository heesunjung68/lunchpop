// main.js

const foodItems = [
    { name: "Pizza", image: "https://placehold.co/400x300?text=Pizza" },
    { name: "Burger", image: "https://placehold.co/400x300?text=Burger" },
    { name: "Pasta", image: "https://placehold.co/400x300?text=Pasta" },
    { name: "Sushi", image: "https://placehold.co/400x300?text=Sushi" },
    { name: "Steak", image: "https://placehold.co/400x300?text=Steak" },
    { name: "Tacos", image: "https://placehold.co/400x300?text=Tacos" },
    { name: "Salad", image: "https://placehold.co/400x300?text=Salad" },
    { name: "Ramen", image: "https://placehold.co/400x300?text=Ramen" },
    { name: "Fried Chicken", image: "https://placehold.co/400x300?text=Fried+Chicken" },
    { name: "Curry", image: "https://placehold.co/400x300?text=Curry" },
    { name: "Pho", image: "https://placehold.co/400x300?text=Pho" },
    { name: "Bibimbap", image: "https://placehold.co/400x300?text=Bibimbap" },
    { name: "Paella", image: "https://placehold.co/400x300?text=Paella" },
    { name: "Fish and Chips", image: "https://placehold.co/400x300?text=Fish+and+Chips" },
    { name: "Dumplings", image: "https://placehold.co/400x300?text=Dumplings" },
    { name: "Soup", image: "https://placehold.co/400x300?text=Soup" },
    { name: "Sandwich", image: "https://placehold.co/400x300?text=Sandwich" },
    { name: "Pancakes", image: "https://placehold.co/400x300?text=Pancakes" },
    { name: "BBQ Ribs", image: "https://placehold.co/400x300?text=BBQ+Ribs" },
    { name: "Burrito", image: "https://placehold.co/400x300?text=Burrito" }
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
