import {Employee } from "./Employee";

export class Department {

    private _employees: Array<Employee>;
    constructor(names) {
        this._employees = names.map(name => new Employee(name, "", ""))

    }

    doWork(): void {
        this._employees.forEach(emp => emp.doWork());
    }
}