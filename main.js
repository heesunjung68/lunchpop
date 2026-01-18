document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommend-button');
    const menuDisplay = document.getElementById('menu-display');

    const menuItems = [
        { name: 'Pizza', image: 'images/pizza.jpg' },
        { name: 'Burger', image: 'images/burger.jpg' },
        { name: 'Sushi', image: 'images/sushi.jpg' },
        { name: 'Tacos', image: 'images/tacos.jpg' },
        { name: 'Curry', image: 'images/curry.jpg' },
        { name: 'Pasta', image: 'images/pasta.jpg' },
        { name: 'Ramen', image: 'images/ramen.jpg' },
        { name: 'Fried Chicken', image: 'images/fried_chicken.jpg' },
        { name: 'Steak', image: 'images/steak.jpg' },
        { name: 'Salad', image: 'images/salad.jpg' }
    ];

    function getRandomMenuItem() {
        const randomIndex = Math.floor(Math.random() * menuItems.length);
        return menuItems[randomIndex];
    }

    function displayRecommendation() {
        // Clear previous content and hide before displaying new
        menuDisplay.classList.remove('show');
        menuDisplay.innerHTML = ''; // Clear existing content

        const recommendedItem = getRandomMenuItem();

        const menuName = document.createElement('h2');
        menuName.textContent = recommendedItem.name;

        const menuImage = document.createElement('img');
        menuImage.src = recommendedItem.image;
        menuImage.alt = `Image of ${recommendedItem.name}`;

        menuDisplay.appendChild(menuName);
        menuDisplay.appendChild(menuImage);

        // Add class to trigger fade-in after content is added
        setTimeout(() => {
            menuDisplay.classList.add('show');
        }, 50); // Small delay to ensure class removal takes effect
    }

    // Initial message or first recommendation
    displayRecommendation();

    recommendButton.addEventListener('click', displayRecommendation);
});
