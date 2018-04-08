/* eslint-disable no-console */
import streetsMoscow from '../utils/moscow-streets';
import streetsNY from '../utils/ny-streets';

const streets = [...streetsMoscow, ...streetsNY];

const input = document.querySelector('.input');
const suggestResult = document.querySelector('.suggest');

let process = false;

function suggest() {
	if (!process) {
		process = setTimeout(() => {

			const value = input.value;
			console.log(value);
			const reg = new RegExp(value, 'i');
			let result = [];

			console.time('time');
			if (value !== '') {
				for (let adress of streets) {
					if (result.length > 10) break;
					if (reg.test(adress)) {
						result.push(`<div class="suggest__item"><b>${adress}</b></div>`);
					}
				}
			}

			suggestResult.innerHTML = result.join('');
			console.timeEnd('time');
			process = false;
		}, 200);
	}
}

input.addEventListener('keyup', suggest);