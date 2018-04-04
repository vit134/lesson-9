import streets from './streets';

const input = document.querySelector('.input');
const suggestResult = document.querySelector('.search');


function suggest() {
	const value = this.value.toLowerCase();
	let result = [];
	let resCount = 0;

	if (value !== '') {
		for (let adress of streets) {
			if (resCount < 10) {
				if (adress.toLowerCase().indexOf(value) !== -1) {
					result.push(`<div class="search__item">${resCount + 1}. <b>${adress}</b></div>`);
					resCount++;
				}
			} else {
				break;
			}
		}
	}
	
	suggestResult.innerHTML = result.join('');
}

input.addEventListener('keyup', suggest);