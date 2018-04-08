/* eslint-disable no-console */
export default class Store {
	constructor() {
		this._events = {};
	}

	subscribe(event, handler) {
		if (!this._events.hasOwnProperty(event)) {
			this._events[event] = handler;
			console.log(`подписка на событие ${event}`);
		} else {
			console.log(`событие ${event} уже подписано`);
		}
	}

	unsubscribe(event, handler) {
		if (this._events.hasOwnProperty(event)) {
			delete this._events[event];
			console.log(`отписка от события ${event}`);
			handler();
		} else {
			console.log(`событие ${event} не было подписано или уже отписано`);
		}
	}

	emit(event) {
		if (this._events.hasOwnProperty(event)) {
			console.log(`выполнить функцию события ${event}`);
			this._events[event]();
		} else {
			console.log(`не найдено события ${event}`);
		}
	}
} 