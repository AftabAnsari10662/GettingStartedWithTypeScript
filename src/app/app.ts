import {Greeter} from "./Greeter";
import {Employee} from "./Employee";
export class App {


    sayHello() {
        let name = "Aftab Ansari";
        let greeter = new Greeter(name);
        let emp = new Employee(name);
        emp.doWork();

        console.log(greeter.greet());

    }

}