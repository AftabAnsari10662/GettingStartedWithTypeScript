class Person {

	private _title: string;
	constructor(title: string) {
		this._title = title;
	}

	get title() {
		return this._title;
	}
}

interface IEmployee {

	doWork(): void;
	fillTimesheet(): void;
}

export class Employee extends Person implements IEmployee {

	private _name: string;
	private _email: string;

	constructor(name: string, title: string, email: string) {
		super(title);
		this._name = name;
		this._email = email;
	}

	get name() {

		return this._name;
	}

	get email() {

		return this._email;
	}

	doWork() {
		let str = `${this.name}  ${this.title} is working from office.`
		console.log(str.toUpperCase());
	}

	fillTimesheet(): void {
		console.log(`${this.name.toUpperCase()} has filled the timesheet`);
	}
}