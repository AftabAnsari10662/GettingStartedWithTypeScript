import {Greeter} from "./Greeter";
import {Employee} from "./Employee";
import { User } from "./User";
export class App {


    sayHello() {
        let name = "Aftab Ansari";
        let greeter = new Greeter(name);
        let emp = new Employee(name);
        let user = new User("Ansari", "Ansari@Gmail.com", "motuansari@gmail.com");
        console.info(user.getName());
        console.info(user.getPrimaryEmail());
        console.warn(user.getSecondaryEmail());
        emp.doWork();

        console.log(greeter.greet());

    }

}