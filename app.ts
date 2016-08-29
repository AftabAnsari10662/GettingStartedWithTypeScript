import {Greeter} from "./Greeter";

class App {


    sayHello() {
        let greeter = new Greeter("Aftab Ansari");

        console.log(greeter.greet());

    }

}