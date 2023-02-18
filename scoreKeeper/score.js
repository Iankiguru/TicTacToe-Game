const playerBtn1 = document.querySelector('#playerBtn1');
const playerBtn2 = document.querySelector('#playerBtn2');
const restartBtn = document.querySelector('#restartBtn');
const playerTitle = document.querySelector('#playerTitle');
const player1ScoreDisplay = document.querySelector('#player1');
const player2ScoreDisplay = document.querySelector('#player2');
const selectScore = document.querySelector('#select');

let winnerScore = 0;
let player1Score = 0;
let player2Score = 0;
let isGameOver = false;
playerTitle.textContent = '';

if (!playerBtn1 || !playerBtn2 || !restartBtn || !playerTitle || !player1ScoreDisplay || !player2ScoreDisplay || !selectScore) {
  console.error('One or more elements could not be found in the DOM.');
  
}

selectScore.addEventListener('change', (e) => {

  winnerScore = parseInt(e.target.value);
  console.log(winnerScore)
  reset();
});

playerBtn1.addEventListener('click', () => {
  if (!isGameOver) {
    player1Score += 1;

    if (player1Score === winnerScore) {
      playerTitle.textContent = `Player 1 wins by ${player1Score}`;
      isGameOver = true;
      player1ScoreDisplay.classList.add('winner')
      player2ScoreDisplay.classList.add('loser')
    } else {
        playerTitle.textContent = 'player 2s turn';
      player1ScoreDisplay.textContent = player1Score;
    }
  }
});

playerBtn2.addEventListener('click', () => {
  if (!isGameOver) {
    player2Score += 1;

    if (player2Score === winnerScore) {
      playerTitle.textContent = `Player 2 wins by ${player2Score}`;
      player2ScoreDisplay.classList.add('winner')
      player1ScoreDisplay.classList.add('loser')
      isGameOver = true;
    } else {
        playerTitle.textContent = 'player 1s turn';
      player2ScoreDisplay.textContent = player2Score;
    }
  }
});

restartBtn.addEventListener('click', reset);

function reset() {
  player1Score = 0;
  player2Score = 0;
  player1ScoreDisplay.textContent = player1Score;
  player2ScoreDisplay.textContent = player2Score;
  playerTitle.textContent = '';
  isGameOver = false;
    player1ScoreDisplay.classList.remove('winner', 'loser')
    player2ScoreDisplay.classList.remove('loser', 'winner');
   
}
  
