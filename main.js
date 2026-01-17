import { LottoBall } from './LottoBall.js';

customElements.define('lotto-ball', LottoBall);

const generatorBtn = document.getElementById('generatorBtn');
const lottoBallsContainer = document.getElementById('lotto-balls-container');
const ballColors = ['#ff7f50', '#87ceeb', '#32cd32', '#ff69b4', '#ffd700', '#9370db'];

generatorBtn.addEventListener('click', () => {
    lottoBallsContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoBall.setAttribute('color', ballColors[index]);
        lottoBallsContainer.appendChild(lottoBall);
    });
});
