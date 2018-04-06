/* eslint-disable no-console */
import streetsMoskow from './moscow-streets';
import streetsNY from './ny-streets';

const streets = [...streetsMoskow, ...streetsNY];

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
const main2 = new Suggest(document.querySelector('.main_2'), suggest_2);
const main3 = new Suggest(document.querySelector('.main_3'), suggest_3);

main1.subscribe();
main2.subscribe();
main3.subscribe();

function suggest_1(input, suggestResult) {
	console.time('time of first version');
	const value = input.value.toLowerCase();
	let result = [];
	let count = 0;

	if (value !== '') {
		for (let adress of streets) {
			if (result.length > 10) break;
			if (adress.toLowerCase().indexOf(value) !== -1) {
				result.push(`<div class="suggest__item"><b>${adress}</b></div>`);
			}
			count++;
		}
	}

	console.log('count',count);

	suggestResult.innerHTML = result.join('');
	console.timeEnd('time of first version');
}

function suggest_2(input, suggestResult) {
	const value = input.value;
	const reg = new RegExp(value,'i') ;
	let result = [];
	
	console.time('time of second version');
	if (value !== '') {
		for (let adress of streets) {
			if (result.length > 10) break;
			if (reg.test(adress) ) {
				result.push(`<div class="suggest__item"><b>${adress}</b></div>`);
			}
		}		
	}

	suggestResult.innerHTML = result.join('');
	console.timeEnd('time of second version');
}

function suggest_3(input, suggestResult) {
	const value = input.value;
	const list = document.getElementById('foundstreets');

	console.time('time of third version');
	if (value !== '') {
		if ( list.options ) {
			var reg = new RegExp(value,'i') ;
			for (var i = list.options.length-1; i >= 0; i--) {
				if ( !reg.test(list.options[i].innerHTML ) ) {
					// возвращаю в исходный массив
					streets[ list.options[i].id ] = list.options[i].innerHTML;
					// удаляю option
					list.removeChild(list.options[i]);
				}
			}		
		}

		// исследую исходный массив
		for (var i = 0; i < streets.length; i++) {
			if (list.options.length > 9) break;
			var item = document.createElement('option');	// создаю новый option в <select id="foundstreets">
			item.innerHTML = streets[i];
			if (reg.test(streets[i]) ) {
				item.id=i;
				list.appendChild(item.cloneNode(true));	// добавлЯю созданный новый option в <select id="foundstreets">
				streets[i] = '';
			}
		}
	}
	console.timeEnd('time of third version');
}

function suggest_4(input, suggestResult) {
	const value = input.value;

	
}