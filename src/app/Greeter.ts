export class Greeter {
    greeting: string;
    person:string;
    constructor(message: string) {
        this.greeting = message;
        this.person = "Aftab Ansari";
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}


