
import { Employee } from "./Employee";
export class Department {

    employees: Employee[];
    constructor(names: string[]) {
        console.log(names);
        this.employees = names.map(name => new Employee(name));
    }

    doWork(): void {
        this.employees.forEach(emp => {
            console.log(emp.name);
        });
    }

}