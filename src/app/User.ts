export class User {

    private name: string = "Aftab";
    private primaryEmail: string = "aftab.ansari@Honeywell.com";
    private secondaryEmail:string = "none";
    constructor(name: string, primaryEmail: string = "default@default.com", secondaryEmail?:string) {

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