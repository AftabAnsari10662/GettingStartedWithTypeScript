import {Greeter} from "./Greeter";
import {Employee} from "./Employee";
import { User } from "./User";
import { Department} from "./Department";
export class App {


    sayHello() {
        let name = "Aftab Ansari";
        let greeter = new Greeter(name);
        let emp = new Employee(name);
        let user = new User("Ansari", "motuansari@gmail.com");
        let names: Array<string> = ["Aftab", "Anshul", "Rohit"];
        let department = new Department(names);
        console.log(`Department Name : ${department.department}`);
        //console.log(`Department Id : ${department.departmentId}`)
        department.doWork();
        console.info(user.getName());
        console.info(user.getPrimaryEmail());
        console.warn(user.getSecondaryEmail());
        emp.doWork();

        console.log(greeter.greet());

    }

}