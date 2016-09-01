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

    sayHello(): string {

        return `Helloo!, ${this.greeting}`;
    }

    sayGoodBye(): string {

        return "Good Bye!!" + this.greeting;
    }

}

