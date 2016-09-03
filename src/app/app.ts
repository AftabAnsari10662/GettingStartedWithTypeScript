

import {Greeter} from "./Greeter";
import {Employee} from "./Employee";
import { User } from "./User";
import { Department} from "./department";
export class App {


    sayHello() {

        let name = "Aftab Ansari";
        let greeter = new Greeter(name);
        let emp = new Employee(name, "Title", "aftabansari10662@gmail.com");
        let user = new User("Ansari", "motuansari@gmail.com");
        let names: Array<string> = ["Aftab",
            "Anshul Rana",
            "Rohit Kumar",
            "Chaithra Mandanna",
            "Sampath Karthic",
            "Sunil Parisi",
            "Girish c",
            "Nanda Kishor",
            "Shubhayu Roy",
            "Balachandra Reddy",
            "Durgesh Shukla",
            "Gaurish Shukla",
            "Supraja",
            "Gazala",
            "Malathy Rajkumar",
            "Sameer",
            "Sneha Harsh",
            "Wahid Abdul"];
        names.sort((name1, name2) => { return name1 > name2 ? 1 : -1 });
        let department = new Department(names);
        // $("#clickMe").click( department.doWork());

        // console.info(user.getName());
        // console.info(user.getPrimaryEmail());
        // console.warn(user.getSecondaryEmail());
        // emp.doWork();
        department.doWork();
        console.log(greeter.greet());

    }

}