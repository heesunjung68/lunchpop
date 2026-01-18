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
            { name: 'Bibimbap', image: 'images/bibimbap.jpg' },
            { name: 'Paella', image: 'images/paella.jpg' },
            { name: 'Pho', image: 'images/pho.jpg' },
            { name: 'Fish and Chips', image: 'images/fish_and_chips.jpg' },
            { name: 'Dumplings', image: 'images/dumplings.jpg' },
            { name: 'Burrito', image: 'images/burrito.jpg' },
            { name: 'Pancakes', image: 'images/pancakes.jpg' },
            { name: 'BBQ Ribs', image: 'images/bbq_ribs.jpg' },
            { name: 'Pizza', image: 'images/pizza.jpg' },
            { name: 'Burger', image: 'images/burger.jpg' }
        ];
    }

    generateMenu() {
        const randomIndex = Math.floor(Math.random() * this.menus.length);
        const selectedMenu = this.menus[randomIndex];

        const menuDisplay = this.shadowRoot.querySelector('#menu');
        menuDisplay.textContent = selectedMenu.name;

        const image = this.shadowRoot.querySelector('#food-image');
        image.src = selectedMenu.image;
        image.setAttribute('style', 'display: block;');
    }
}

customElements.define('lunch-menu', LunchMenu);
