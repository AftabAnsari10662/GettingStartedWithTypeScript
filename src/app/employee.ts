import { Person } from "./Person";
import { IEmployee } from "./IEmployee";

export class Employee extends Person implements IEmployee {

	private _name: string;
	private _email: string;

	constructor(name: string, title: string, email: string) {
		super(title);
		this._name = name;
		this._email = email;
	}

	set name(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}
	set email(email) {
		this._email = email;
	}
	get email() {

		return this._email;
	}

	doWork() {
		let str = `${this.name}
		  ${this.title} is working from office.`
		console.log(str.toUpperCase());
	}

	fillTimesheet(): void {
		console.log(`${this.name.toUpperCase()}
		 has filled the timesheet`);
	}
}