"use strict";

const p1current = document.querySelector(".ccScore0");
const p2current = document.querySelector(".ccScore1");
const p1total = document.querySelector(".ttScore0");
const p2total = document.querySelector(".ttScore1");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const player_active = document.querySelector(".activePlayer");
const rollDice = document.querySelector(".dice img");

let cScore, totalScore, activePlayer, playing;

const start = function () {
  cScore = 0;
  totalScore = [0, 0];
  activePlayer = 0;
  playing = true;

  p1current.textContent = 0;
  p2current.textContent = 0;
  p1total.textContent = 0;
  p2total.textContent = 0;

  player0.classList.add("activePlayer");
  player1.classList.remove("activePlayer");
  document.querySelector(`.player0`).classList.remove("playerWin");
  document.querySelector(`.player1`).classList.remove("playerWin");
  winner.classList.add("hidden");
};
start();

function switchPlayer() {
  cScore = 0;
  p1current.textContent = 0;
  p2current.textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  player0.classList.toggle("activePlayer");
  player1.classList.toggle("activePlayer");
}

document.querySelector(".rollDice").addEventListener("click", function () {
  if (playing) {
    rollDice.classList.remove("hidden");
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    document.querySelector(".dice img").src = `images/dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      cScore += randomNumber;
      document.querySelector(`.ccScore${activePlayer}`).textContent = cScore;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector(".hold").addEventListener("click", function () {
  if (playing) {
    totalScore[activePlayer] += cScore;
    console.log(totalScore);
    document.querySelector(`.ttScore${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= 100) {
      playing = false;
      const winnerP = activePlayer + 1;
      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("playerWin"); //bgc
      winner.classList.remove("hidden");
      document.getElementById(
        "winner"
      ).textContent = `Player ${winnerP} has won!`;
      rollDice.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

document.querySelector(".nGame").addEventListener("click", function () {
  start();
});
