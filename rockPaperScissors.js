const msg = document.querySelector('.message');
const btns = document.querySelectorAll('button')
const vs = document.querySelector('.vs');
const winner = document.querySelector('.winner');
let player = document.querySelector('.score-player');
let computer = document.querySelector('.score-computer');

let score = [0, 0];
let gameScore = [0, 0];


let playGame;
let computerGuess;
let compOutPut;

// functionality for each case
btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        player.textContent = '0';
        computer.textContent = '0';
        playGame = e.target.textContent;
        computerGuess = Math.trunc(Math.random() * 3) + 1;
        if (computerGuess === 1) {
            compOutPut = 'Paper';
            vs.textContent = `${playGame} vs ${compOutPut}`;
            console.log(playGame);
        } else if (computerGuess === 2) {
            compOutPut = 'Rock';
            vs.textContent = `${playGame} vs ${compOutPut}`;
        } else if (computerGuess === 3) {
            compOutPut = 'Scissors';
            vs.textContent = `${playGame} vs ${compOutPut}`;
        }
        win(e);
        draw(e);
        msg.textContent = `Player - ${score[0]} : Computer - ${score[1]}`
        endGame();

    })
});
function endGame() {
    if (score[0] == 10) {
        msg.textContent = '';
        vs.textContent = '';
        score[0] = 0;
        score[1] = 0;
        winner.textContent = 'Player wins the game!';
        gameScore[0]++;
    }
    if (score[1] == 10) {
        msg.textContent = '';
        vs.textContent = '';
        score[0] = 0;
        score[1] = 0;
        winner.textContent = 'Computer wins the game!';
        gameScore[1]++
        
    }
    computer.textContent = `${gameScore[1]}`;
    player.textContent = `${gameScore[0]}`;
}

// win scenarios
function win(e) {
    playGame = e.target.textContent;
    if ((computerGuess === 1 && playGame === 'Rock') || (computerGuess === 2 && playGame === 'Scissors') || (computerGuess === 3 && playGame === 'Paper')) {
        score[1]++;
        winner.textContent = 'Computer wins';
    } else {
        score[0]++;
        winner.textContent = 'Player wins';
    }
}
// draw scenario
function draw(e) {
    playGame = e.target.textContent;
    if ((computerGuess === 1 && playGame === 'Paper') || (computerGuess === 2 && playGame === 'Rock') || (computerGuess === 3 && playGame === 'Scissors')) {
        winner.textContent = 'It is a draw';
        score[1]--;
    }
    if(score[1] === -1) {
        score[1] = 0;
    }
}

