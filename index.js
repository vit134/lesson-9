/* eslint-disable no-console */
import streetsMoscow from './moscow-streets';
import streetsNY from './ny-streets';

const streets = [...streetsMoscow, ...streetsNY];

let process = false;

class Suggest {
	constructor(parent, handler) {
		this.parent = parent;
		this.input = this.parent.querySelector('.input');
		this.suggestResult = this.parent.querySelector('.suggest');
		this.handler = handler;
	}

	subscribe() {
		this.input.addEventListener('keyup', this.handler.bind(null, this.input, this.suggestResult));
	}
}

const main1 = new Suggest(document.querySelector('.main_1'), suggest_1);

main1.subscribe();

function suggest_1(input, suggestResult) {
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
};