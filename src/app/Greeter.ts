export class Greeter {


    private greeting: string;

    private person: string;
    constructor(message: string) {
        this.greeting = message;
        this.person = "Having Fun with Typescript!";
    }
    greet() {
        return "Hello, " + this.greeting;
    }


    sayHello() {

        return `Helloo!!, ${this.greeting} `;
    }
    sayGoodBye() {

        return "Good Bye!" + this.greeting;
    }

}

