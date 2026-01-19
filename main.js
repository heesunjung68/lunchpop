const menuDisplay = document.getElementById('menu-display');
const generateBtn = document.getElementById('generate-btn');
const menuImage = document.getElementById('menu-image');
const menuName = document.getElementById('menu-name');

const menuOptions = [
    { name: 'Pizza', image: 'images/pizza.jpg' },
    { name: 'Hamburger', image: 'images/hamburger.jpg' },
    { name: 'Pasta', image: 'images/pasta.jpg' },
    { name: 'Kimbap', image: 'images/kumbap.jpg' },
    { name: 'Chicken Salad', image: 'images/chickensalad.jpg' }
];

generateBtn.addEventListener('click', () => {
    if (menuOptions.length > 0) {
        const randomIndex = Math.floor(Math.random() * menuOptions.length);
        const selectedMenu = menuOptions[randomIndex];
        menuImage.src = selectedMenu.image;
        menuName.textContent = selectedMenu.name;
    } else {
        menuName.textContent = 'No menu options available!';
        menuImage.src = '';
    }
});
