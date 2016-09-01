
import { Employee } from "./Employee";
export class Department {

    private departmentName: string = "Engineering";
    private departmentId: Number;
    employees: Employee[];
    constructor(names: string[]) {
        console.log(names);
        this.departmentId = 100;
        this.employees = names.map(name => new Employee(name));
    }

    get department() {
        return this.departmentName;
    }
    doWork(): void {
        this.employees.forEach(emp => {
            console.log(emp.name);
        });
    }

}