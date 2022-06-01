"use script";

const main = document.querySelector(".main");
const newGame = document.querySelector(".newGame");
const player1 = document.querySelector(".player1");
const scoreTotal = document.querySelector(".score_total");
const numberPlayer = document.querySelector(".number_player");
const scorePlayer = document.querySelector(".score_player");
const scoreNowPlayer = document.querySelector(".scorenowplayer");
const computer = document.querySelector(".computer");
const scoreTotalCPU = document.querySelector(".score_totalCPU");
const numberComputer = document.querySelector(".number_computer");
const scoreComputer = document.querySelector(".score_computer");
const scoreNowComputer = document.querySelector(".scorenowcomputer");
const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const hidden = document.querySelector(".hidden");
const winner = document.querySelector(".winner");
const paragraf = document.querySelector(".paragraf");
const closebtn = document.querySelector(".closebtn");

let score1 = 0;
let score2 = 0;
let scoreTotal1 = 0;
let scoreTotal2 = 0;

stone.addEventListener("click", function () {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	console.log(randomNumber);
	if (randomNumber === 2) {
		score1 += 1;
		scoreNowComputer.textContent = score1;
		result.textContent = "You have chosen 🥌 and computer 📃. 😭";
		result.classList.remove("hidden");
	}
	if (randomNumber === 3) {
		score2 += 1;
		scoreNowPlayer.textContent = score2;
		result.textContent = "You have chosen 🥌 and computer ✂. 🎉";
		result.classList.remove("hidden");
	}
	if (randomNumber === 1) {
		result.textContent = "You have chosen 🥌 and computer also 🥌. Tie!";
		result.classList.remove("hidden");
	}

	if (score1 === 3) {
		winner.classList.remove("hidden");
		paragraf.textContent = `Bad luck! You lose... Try again! Press x or esc to play again!`;
		scoreTotal2 += 1;
		numberComputer.textContent = scoreTotal2;
		computer.style.backgroundColor = "black";
		computer.style.color = "red";
	}
	if (score2 === 3) {
		winner.classList.remove("hidden");
		paragraf.textContent = `You win!!! Press x or esc to play again!`;
		scoreTotal1 += 1;
		numberPlayer.textContent = scoreTotal1;
		player1.style.backgroundColor = "black";
		player1.style.color = "red";
	}
});

paper.addEventListener("click", function () {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	console.log(randomNumber);
	if (randomNumber === 2) {
		score1 += 1;
		scoreNowComputer.textContent = score1;
		result.textContent = "You have chosen 📃 and computer ✂. 😭";
		result.classList.remove("hidden");
	}
	if (randomNumber === 3) {
		score2 += 1;
		scoreNowPlayer.textContent = score2;
		result.textContent = "You have chosen 📃 and computer 🥌. 🎉";
		result.classList.remove("hidden");
	}
	if (randomNumber === 1) {
		result.textContent = "You have chosen 📃 and computer also 📃. Tie!";
		result.classList.remove("hidden");
	}

	if (score1 === 3) {
		winner.classList.remove("hidden");
		paragraf.textContent = `Bad luck! You lose... Try again! Press x or esc to play again!`;
		scoreTotal2 += 1;
		numberComputer.textContent = scoreTotal2;
		computer.style.backgroundColor = "black";
		computer.style.color = "red";
	}
	if (score2 === 3) {
		winner.classList.remove("hidden");
		paragraf.textContent = `You win!!! Press x or esc to play again!`;
		scoreTotal1 += 1;
		numberPlayer.textContent = scoreTotal1;
		player1.style.backgroundColor = "black";
		player1.style.color = "red";
	}
});

scissors.addEventListener("click", function () {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	console.log(randomNumber);
	if (randomNumber === 2) {
		score1 += 1;
		scoreNowComputer.textContent = score1;
		result.textContent = "You have chosen ✂ and computer 🥌. 😭";
		result.classList.remove("hidden");
	}
	if (randomNumber === 3) {
		score2 += 1;
		scoreNowPlayer.textContent = score2;
		result.textContent = "You have chosen ✂ and computer 📃. 🎉";
		result.classList.remove("hidden");
	}
	if (randomNumber === 1) {
		result.textContent = "You have chosen ✂ and computer also ✂. Tie!";
		result.classList.remove("hidden");
	}

	if (score1 === 3) {
		winner.classList.remove("hidden");
		paragraf.textContent = `Bad luck! You lose... Try again! Press x or esc to play again!`;
		scoreTotal2 += 1;
		numberComputer.textContent = scoreTotal2;
		computer.style.backgroundColor = "black";
		computer.style.color = "red";
	}
	if (score2 === 3) {
		winner.classList.remove("hidden");
		paragraf.textContent = `You win!!! Press x or esc to play again!`;
		scoreTotal1 += 1;
		numberPlayer.textContent = scoreTotal1;
		player1.style.backgroundColor = "black";
		player1.style.color = "red";
	}
});

closebtn.addEventListener("click", function () {
	score1 = 0;
	score2 = 0;
	winner.classList.add("hidden");
	result.classList.add("hidden");
	scoreNowComputer.textContent = 0;
	scoreNowPlayer.textContent = 0;
	computer.style.backgroundColor = "white";
	computer.style.color = "#333";
	player1.style.backgroundColor = "white";
	player1.style.color = "#333";
});

newGame.addEventListener("click", function () {
	score1 = 0;
	score2 = 0;
	scoreTotal1 = 0;
	scoreTotal2 = 0;
	winner.classList.add("hidden");
	result.classList.add("hidden");
	scoreNowComputer.textContent = 0;
	scoreNowPlayer.textContent = 0;
	numberPlayer.textContent = 0;
	numberComputer.textContent = 0;
	computer.style.backgroundColor = "white";
	computer.style.color = "#333";
	player1.style.backgroundColor = "white";
	player1.style.color = "#333";
});

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !winner.classList.contains("hidden")) {
		score1 = 0;
		score2 = 0;
		winner.classList.add("hidden");
		result.classList.add("hidden");
		scoreNowComputer.textContent = 0;
		scoreNowPlayer.textContent = 0;
		computer.style.backgroundColor = "white";
		computer.style.color = "#333";
		player1.style.backgroundColor = "white";
		player1.style.color = "#333";
	}
});
