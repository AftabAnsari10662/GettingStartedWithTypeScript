export class User {

    name: string = "Aftab";
    primaryEmail: string = "aftab.ansari@Honeywell.com";
    secondaryEmail:string = "none";
    constructor(name: string, primaryEmail: string, secondaryEmail?:string) {

        this.name = name;
        this.primaryEmail = primaryEmail;
        this.secondaryEmail = secondaryEmail;
    }

    getName(): string {
        return `Name : ${this.name}`;
    }

    getPrimaryEmail(): string {

        return `Primary Email : ${this.primaryEmail}`;
    }

    getSecondaryEmail():string{
        return `Secondary Email : ${this.secondaryEmail}`
    }
}