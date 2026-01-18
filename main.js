// main.js

const foodItems = [
    { name: "Pizza", image: "https://images.unsplash.com/photo-1571066810156-f5c78673b3e2?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Burger", image: "https://images.unsplash.com/photo-1568901346379-880be5296860?auto=format&fit=crop&q=80&w=1900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pasta", image: "https://images.unsplash.com/photo-1551829621-e7a2b0e7d5c5?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sushi", image: "https://images.unsplash.com/photo-1579584425313-a4441584c0a5?auto=format&fit=crop&q=80&w=1904&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Steak", image: "https://images.unsplash.com/photo-1546069901-dcd41d3d6232?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tacos", image: "https://images.unsplash.com/photo-1607513759714-c146e911c741?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Salad", image: "https://images.unsplash.com/photo-1512621776951-a57969f2e3e5?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ramen", image: "https://images.unsplash.com/photo-1585032226651-759b368d7247?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Fried Chicken", image: "https://images.unsplash.com/photo-1589302685934-8c853f6a2a53?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Curry", image: "https://images.unsplash.com/photo-1590432375836-829d665a3b2b?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pho", image: "https://images.unsplash.com/photo-1573540673322-2630718544d6?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bibimbap", image: "https://images.unsplash.com/photo-1570775510005-7f9a2f7c0a9e?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Paella", image: "https://images.unsplash.com/photo-1595200388277-2f7413f1e94c?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Fish and Chips", image: "https://images.unsplash.com/photo-1549488349-f2d4807469a5?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Dumplings", image: "https://images.unsplash.com/photo-1555986161-0d326a0904d4?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Soup", image: "https://images.unsplash.com/photo-1594951465228-a3f2b8f8a1e2?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sandwich", image: "https://images.unsplash.com/photo-1563227814-11ad6c2a639b?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pancakes", image: "https://images.unsplash.com/photo-1557007130-934c9c2f6b3b?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "BBQ Ribs", image: "https://images.unsplash.com/photo-1557790382-f5f4a7c0f1e0?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Burrito", image: "https://images.unsplash.com/photo-1565292881079-555e7146e0e0?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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