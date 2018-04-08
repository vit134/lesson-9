/* eslint-disable no-console */

import Store from './Store';

const store = new Store();

const emitter = {
	on: function(event, handler) {
		// TODO: подписать
		store.subscribe(event, handler);
	},

	off: function(event, handler) {
		// TODO: отписать
		store.unsubscribe(event, handler);
	},

	emit: function(event) {
		// TODO: обработка события
		store.emit(event);
	}
};

const handlerOn = function () {
	// что-то делаем
	console.log('что то делаем');
};

const handlerOff = function () {
	// что-то делаем
	console.log('off callback');
};

// подписали
emitter.on('one', handlerOn);
emitter.on('two', handlerOn);
emitter.on('three', handlerOn);

console.log('---');

// обработали событие
emitter.emit('one');
emitter.emit('two');
emitter.emit('one');

emitter.off('three', handlerOff);

emitter.emit('three');

// отписали
emitter.off('one', handlerOff);
