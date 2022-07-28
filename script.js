"use strict";

const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");
const diceRollEl = document.querySelector(".dice__roll");
const diceHold = document.querySelector(".dice__hold");

let score = 0;
let player = 0;
const points = [0, 0];

diceRollEl.addEventListener("click", function () {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(`player ${player} got dice number ${dice}`);
  if (dice === 6) {
    score = 0;
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
});
diceHold.addEventListener("click", function () {
  points[player] += score;

  console.log(`player ${player} hold dice`);
  player = player === 0 ? 1 : 0;
  score = 0;
  leftEl.classList.toggle("active");
  rightEl.classList.toggle("active");
  console.log(`points ${points}`);
  console.log(`--------------------------------`);
  console.log(`new player ${player} chance`);
  console.log(`--------------------------------`);
});
