
import { Employee } from "./Employee";
export class Department {

    public departmentName: string = "Engineering";
    private departmentId: Number;
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