import { startGame } from "./startGame.js"



export const createGameMenu = (flag) => {
	const btnPrev = document.querySelector('.header__btn-prev');
	btnPrev.style.display = "none";


	const score = document.querySelector('.score');
	let s1 = Number(score.textContent);
	score.style.display = "none";

	const bestScore = document.querySelector('.best_score')
	if (bestScore.textContent == "") {
		bestScore.textContent = "РЕКОРД: 10000000";
		bestScore.style.visibility = "hidden";

	}
	else {
		if (Number(bestScore.textContent.slice(8, bestScore.textContent.length)) > s1 && flag) {
			bestScore.textContent = ` РЕКОРД: ${s1}`;
			bestScore.style.visibility = "visible";
		}
	}

	const title = document.createElement('h2');
	title.classList.add('game-menu__title');
	const gameSection = document.querySelector('.game-section__container');
	gameSection.innerHTML = "";

	title.textContent = "Сложность игры";

	const createMenuButton = (lvl) => {
		const button = document.createElement('button');
		button.classList.add('game-menu__btn');
		if (lvl == 1) lvl = 'Легкий';
		else if (lvl == 2) lvl = 'Средний';
		else if (lvl == 3) lvl = 'Сложный';
		button.textContent = lvl;
		button.addEventListener('click', () => startGame(lvl));
		return button;
	}

	gameSection.append(
		title,
		createMenuButton(1),
		createMenuButton(2),
		createMenuButton(3)
	);
}