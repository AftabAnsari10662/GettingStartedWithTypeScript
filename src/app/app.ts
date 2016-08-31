import {Greeter} from "./Greeter";

export class App {


    sayHello() {
        let greeter = new Greeter("Aftab Ansari");

        console.log(greeter.greet());

    }

}