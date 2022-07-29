"use strict";

const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");
const diceRollEl = document.querySelector(".dice__roll");
const diceHold = document.querySelector(".dice__hold");
const diceImg = document.getElementById("dice_img");
const reset = document.querySelector(".new-game");
const pointEl1 = document.querySelector(".score-0");
const pointEl2 = document.querySelector(".score-1");
const current1 = document.querySelector(".current-0");
const current2 = document.querySelector(".current-1");

let score,
  player = 0,
  points;

const newGame = function () {
  const currentPlayer = document.querySelector(`.player-${player}`);
  currentPlayer.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

  const currentPlayerHeading = document.querySelector(
    `.player-${player}-heading`
  );
  currentPlayerHeading.textContent = `Player ${player}`;
  currentPlayerHeading.style.color = "#000";
  points = [0, 0];
  score = 0;
  player = 0;
  leftEl.classList.add("active");
  pointEl1.textContent = score;
  pointEl2.textContent = score;
  current1.textContent = score;
  current2.textContent = score;
  diceRollEl.disabled = false;
  diceHold.disabled = false;
  diceImg.style.visibility = "hidden";
};

newGame();
diceRollEl.addEventListener("click", function () {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceImg.style.visibility = "visible";
  console.log(`player ${player} got dice number ${dice}`);
  document.getElementById("dice_img").src = `img/dice-${dice}.svg`;
  if (dice === 6) {
    score = 0;
    const currentScoreEl = document.querySelector(`.current-${player}`);
    currentScoreEl.textContent = score;
    console.log(`------------player ${player} out------------`);
    player = player === 0 ? 1 : 0;

    leftEl.classList.toggle("active");
    rightEl.classList.toggle("active");

    console.log(`points ${points}`);
    console.log(`--------------------------------`);
    console.log(`new player ${player}`);
    console.log(`--------------------------------`);

    return;
  }

  score += dice;

  const currentScoreEl = document.querySelector(`.current-${player}`);
  currentScoreEl.textContent = score;
});
diceHold.addEventListener("click", function () {
  points[player] += score;

  score = 0;
  const currentScoreEl = document.querySelector(`.current-${player}`);
  currentScoreEl.textContent = score;

  console.log(`player ${player} hold dice`);
  const pointEl = document.querySelector(`.score-${player}`);

  if (points[player] >= 100) {
    pointEl.textContent = 100;
    const currentPlayer = document.querySelector(`.player-${player}`);
    currentPlayer.style.backgroundColor = "#222";

    const currentPlayerHeading = document.querySelector(
      `.player-${player}-heading`
    );
    currentPlayerHeading.textContent = "You Won";
    currentPlayerHeading.style.color = "#fff";

    diceRollEl.disabled = true;
    diceHold.disabled = true;
    diceImg.style.visibility = "hidden";
    currentPlayer.classList.remove("active");
    return;
  }

  pointEl.textContent = points[player];

  player = player === 0 ? 1 : 0;

  leftEl.classList.toggle("active");
  rightEl.classList.toggle("active");
  console.log(`points ${points}`);
  console.log(`--------------------------------`);
  console.log(`new player ${player} chance`);
  console.log(`--------------------------------`);
});

reset.addEventListener("click", function () {
  newGame();
});
