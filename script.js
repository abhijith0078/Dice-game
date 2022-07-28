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

let score, player, points;

const newGame = function () {
  points = [0, 0];
  score = 0;
  player = 0;
  document.querySelector(".score").classList.remove("won");
  pointEl1.textContent = score;
  pointEl2.textContent = score;
  current1.textContent = score;
  current2.textContent = score;
  diceRollEl.disabled = false;
  diceHold.disabled = false;

  diceImg.style.display = "block";
};

newGame();
diceRollEl.addEventListener("click", function () {
  let dice = Math.floor(Math.random() * 6) + 1;
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
  pointEl.textContent = points[player];

  if (points[player] >= 0) {
    document.querySelector(".score").classList.add("won");

    pointEl.textContent = `👏 won 👏`;
    diceRollEl.disabled = true;
    diceHold.disabled = true;
    diceImg.style.display = "none";
    return;
  }

  player = player === 0 ? 1 : 0;

  leftEl.classList.toggle("active");
  rightEl.classList.toggle("active");
  console.log(`points ${points}`);
  console.log(`--------------------------------`);
  console.log(`new player ${player} chance`);
  console.log(`--------------------------------`);
});

// const currentScoreEl = document.querySelector(`.current-${player}`);
// currentScoreEl.textContent = points[player];

reset.addEventListener("click", function () {
  newGame();
});
