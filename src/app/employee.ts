export class Employee {

	private _name: string;

	constructor(name: string) {

		this._name = name;

	}
    get name() {

		return this._name;
	}
	doWork() {
		let str = `${this._name} is working`;
		console.info(str);
	}
}