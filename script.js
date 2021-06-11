
const dices = document.getElementById('dices');
const add = document.getElementById('add');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');

const round0 = document.getElementById('round-0')
const round1 = document.getElementById('round-1')
const current0 = document.getElementById('current-0')
const current1 = document.getElementById('current-1')
const name0 = document.getElementById('name-0')
const name1 = document.getElementById('name-1')


var current;
var score; 
var activePlayer;
var gameStart;



roll.addEventListener('click', function() {
    if (gameStart) {
    var dice = Math.floor(Math.random() * 6) + 1;
    dices.src = "dice-" + dice + ".jpg";
    if (dice !== 1 ) {
        current += dice;
        document.querySelector("#current-" + activePlayer).textContent = current;
    } else {
    nextPlayer()
    }}
});


hold.addEventListener('click', function () {
    if (gameStart) {
    score[activePlayer] += current;
    document.querySelector("#round-" + activePlayer).textContent = score[activePlayer];
    if (score[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        gameStart = false;
    } else {
    nextPlayer()
    }}
});


add.addEventListener('click', function () {
    score = [0, 0];
    current = 0;
    activePlayer = 0;
    gameStart = true;
    round0.textContent = '0';
    round1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    name0.textContent = 'PLAYER 1';
    name1.textContent = 'PLAYER 2';
});



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    current = 0;
    current.textContent = '0';
    current.textContent = '0';
}



