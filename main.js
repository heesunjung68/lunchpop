class LunchMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'container');

        const button = document.createElement('button');
        button.textContent = 'Generate Menu';
        button.addEventListener('click', () => this.generateMenu());

        const menuDisplay = document.createElement('p');
        menuDisplay.setAttribute('id', 'menu');

        const image = document.createElement('img');
        image.setAttribute('id', 'food-image');
        image.setAttribute('style', 'display: none;');

        wrapper.appendChild(button);
        wrapper.appendChild(menuDisplay);
        wrapper.appendChild(image);

        const style = document.createElement('style');
        style.textContent = `
            .container {
                text-align: center;
            }
            button {
                cursor: pointer;
                padding: 10px 20px;
                font-size: 16px;
                border-radius: 5px;
                border: 1px solid #ccc;
                background-color: #f0f0f0;
                width: 200px;
            }
            #food-image {
                margin-top: 20px;
                width: 200px;
                height: 200px;
                object-fit: cover;
            }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);

        this.menus = [
            { name: 'Burger', image: 'images/burger.svg' },
            { name: 'Curry', image: 'images/curry.svg' },
            { name: 'Fried Chicken', image: 'images/fried_chicken.svg' },
            { name: 'Pasta', image: 'images/pasta.svg' },
            { name: 'Pizza', image: 'images/pizza.svg' },
            { name: 'Ramen', image: 'images/ramen.svg' },
            { name: 'Salad', image: 'images/salad.svg' },
            { name: 'Steak', image: 'images/steak.svg' },
            { name: 'Sushi', image: 'images/sushi.svg' },
            { name: 'Tacos', image: 'images/tacos.svg' }
        ];
    }

    generateMenu() {
        const randomIndex = Math.floor(Math.random() * this.menus.length);
        const selectedMenu = this.menus[randomIndex];

        const menuDisplay = this.shadowRoot.querySelector('#menu');
        menuDisplay.textContent = selectedMenu.name;

        const image = this.shadowRoot.querySelector('#food-image');
        
        const baseUrl = window.location.href.replace(/[^/]*$/, '');
        image.src = new URL(selectedMenu.image, baseUrl).href;
        
        image.setAttribute('style', 'display: block;');
    }
}

customElements.define('lunch-menu', LunchMenu);
