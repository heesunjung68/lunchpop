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
        // First, fade out and move away current content
        menuDisplay.style.opacity = 0;
        menuDisplay.style.transform = 'translateY(20px)';

        // Use a short delay to allow fade-out to begin before clearing
        setTimeout(() => {
            menuDisplay.innerHTML = ''; // Clear existing content

            const recommendedItem = getRandomMenuItem();

            const menuName = document.createElement('h2');
            menuName.textContent = recommendedItem.name;

            const menuImage = document.createElement('img');
            menuImage.src = recommendedItem.image;
            menuImage.alt = `Image of ${recommendedItem.name}`;
            menuImage.onerror = () => {
                console.error('Image failed to load:', recommendedItem.image);
                // Fallback image - you might want to create a generic fallback image
                // menuImage.src = 'images/placeholder.jpg';
            };

            menuDisplay.appendChild(menuName);
            menuDisplay.appendChild(menuImage);

            // Use requestAnimationFrame to ensure reflow and then apply transition
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    menuDisplay.style.opacity = 1;
                    menuDisplay.style.transform = 'translateY(0)';
                });
            });
        }, 300); // Wait for half the transition duration (0.5s) to clear and new content to appear
    }

    // Initial display on page load
    displayRecommendation();

    recommendButton.addEventListener('click', displayRecommendation);
});