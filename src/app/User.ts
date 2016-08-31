export class User {

    name: string = "Aftab";
    email: string = "aftab.ansari@Honeywell.com";
    constructor(name: string, email: string) {

        this.name = name;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {

        return this.email;
    }
}