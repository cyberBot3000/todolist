export default class TodoMaker {
	#lastTodoId;

	#storageKey = 'lastTodoId';

	constructor() {
		this.#lastTodoId = this.#getActualId();
	}

	#getActualId() {
		if (localStorage.getItem(this.#storageKey) === undefined) {
			this.#updateId(0);
		}
		return Number(localStorage.getItem(this.#storageKey));
	}

	#updateId(newVal) {
		localStorage.setItem(this.#storageKey, newVal);
		this.#lastTodoId = newVal;
		return this.#lastTodoId;
	}

	#getNextId() {
		return this.#updateId(this.#lastTodoId + 1);
	}

	make(value) {
		const createdAt = Date.now();
		return {
			value, done: false, id: this.#getNextId(), createdAt,
		};
	}
}
