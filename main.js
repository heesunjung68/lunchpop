document.addEventListener('DOMContentLoaded', () => {
    const menuOptions = {
        "Chicken Salad": "images/chickensalad.jpg",
        "Kimbap": "images/kimbap.jpg",
        "Pizza": "images/pizza.jpg",
        "Hamburger": "images/hamburger.jpg",
        "Pasta": "images/pasta.jpg"
    };
    const menuKeys = Object.keys(menuOptions);
    const generateMenuBtn = document.getElementById('generateMenuBtn');
    const menuDisplay = document.getElementById('menuDisplay');
    const menuImage = document.getElementById('menuImage');

    generateMenuBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * menuKeys.length);
        const selectedMenu = menuKeys[randomIndex];
        menuDisplay.textContent = selectedMenu;
        menuImage.src = menuOptions[selectedMenu];
        menuImage.alt = selectedMenu;
    });
});
