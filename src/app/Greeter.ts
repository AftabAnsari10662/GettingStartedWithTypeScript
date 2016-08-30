export class Greeter {
    greeting: string;
    person:string;
    constructor(message: string) {
        this.greeting = message;
        this.person = "Having Fun with Typescript!";
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}


