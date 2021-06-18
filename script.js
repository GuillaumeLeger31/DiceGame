
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
var oppPlayer;



roll.addEventListener('click', function() {
    if (gameStart) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
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
    if (score[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        setTimeout(newGame, 1000);
        gameStart = false;
    } else {
    nextPlayer()
    }}
});


add.addEventListener('click', newGame);

function newGame() {
    score = [0, 0];
    current = 0;
    var randomPlayer =  Math.floor(Math.random() * 2);
    activePlayer = randomPlayer; // = 0 //
    opPlayer();
    console.log( "Player" + activePlayer);
    gameStart = true;
    round0.textContent = '0';
    round1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    name0.textContent = 'PLAYER 1';
    name1.textContent = 'PLAYER 2';
    document.querySelector('.player-' + activePlayer).classList.add('test');
    document.querySelector('.player-' + oppPlayer ).classList.remove('test');
};



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    current = 0;
    current0.textContent = '0';
    current1.textContent = '0';
    document.querySelector('.player-0').classList.toggle('test');
    document.querySelector('.player-1').classList.toggle('test');
    document.querySelector('.dice').style.display = 'none';
};

function opPlayer() {
    activePlayer === 1 ? oppPlayer = 0 : oppPlayer = 1;
};


