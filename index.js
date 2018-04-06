import streets from './streets';

const input = document.querySelector('.input');
const suggestResult = document.querySelector('.suggest');


function inputHandler() {
	setTimeout(() => {
		const value = this.value.toLowerCase();
		let result = [];

		if (value !== '') {
			for (let adress of streets) {

				if (result.length > 10) break;
				if (adress.toLowerCase().indexOf(value) !== -1) {
					result.push(`<div class="suggest__item"><b>${adress}</b></div>`);
				}
			}
		}

		suggestResult.innerHTML = result.join('');
	}, 500);
}

input.addEventListener('keyup', inputHandler);