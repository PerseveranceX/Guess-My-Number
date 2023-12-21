'use strict';

const inputField = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const messageElement = document.querySelector('.message');
const resultElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const againButton = document.querySelector('.again');
const backgroundElement = document.body;

const defaultBackgroundColor = '#222';
const winBackgroundColor = '#1b7e15';
const loseBackgroundColor = '#ad0000';

let generateRandomNumber = () => Math.trunc((Math.random() * 20) + 1);

let randomNumber = generateRandomNumber();
let score = 20;
let high_score = 0;

checkButton.addEventListener('click', function () {
    let guessedNumber = inputField.value;

    if (score > 0) {
        if (guessedNumber < 1 || guessedNumber > 20 || guessedNumber === '')
            messageElement.textContent = 'The number is between 1 and 20.';
        else
            if (guessedNumber > randomNumber) {
                messageElement.textContent = '📈 Too High!';
                score--;
                scoreElement.textContent = score;
            }
            else if (guessedNumber < randomNumber) {
                messageElement.textContent = '📉 Too Low!';
                score--;
                scoreElement.textContent = score;
            } else {
                messageElement.textContent = 'You found the number!🎉';
                resultElement.textContent = randomNumber;
                backgroundElement.style.backgroundColor = winBackgroundColor;
                if (score > high_score) {
                    high_score = score;
                    highScoreElement.textContent = high_score;
                }
            }

        if (score == 0) {
            messageElement.textContent = 'You lost!🏮';
            backgroundElement.style.backgroundColor = loseBackgroundColor;
        }
    }
});

againButton.addEventListener('click', function () {
    score = 20;
    randomNumber = generateRandomNumber();
    scoreElement.textContent = score;
    inputField.value = '';
    messageElement.textContent = 'Start guessing...';
    resultElement.textContent = "?";
    backgroundElement.style.backgroundColor = defaultBackgroundColor;
});

