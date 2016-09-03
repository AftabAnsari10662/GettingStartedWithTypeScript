export class Person {

	private _title: string;
	constructor(title: string) {
		this._title = title;
	}

	get title() {
		return this._title;
	}
}