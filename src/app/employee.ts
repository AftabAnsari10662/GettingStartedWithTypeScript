interface IEmployee {

	doWork(): void;
	fillTimesheet(): void;
}

export class Employee implements IEmployee {

	private _name: string;
	private _email: string;

	constructor(name: string, email: string) {
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
		console.log(`${this.name} is working from office.`);
	}

	fillTimesheet():void{
		console.log(`${this.name} has filled the timesheet`);
	}
}