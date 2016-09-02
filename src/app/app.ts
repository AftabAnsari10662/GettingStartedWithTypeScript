

import {Greeter} from "./Greeter";
import {Employee} from "./Employee";
import { User } from "./User";
import { Department} from "./department";
export class App {


    sayHello() {
        let name = "Aftab Ansari";
        let greeter = new Greeter(name);
        let emp = new Employee(name, "aftabansari10662@gmail.com");
        let user = new User("Ansari", "motuansari@gmail.com");
        let names: Array<string> = ["Aftab",
            "Anshul Rana",
            "Rohit K",
            "Chaithra M",
            "Sampath Kaarthic",
            "Sunil Parisi",
            "Girish c",
            "Nanda Kishor",
            "Shubhayu Roy",
            "Balachadra Reddy",
            "Durgesh Shukla",
            "Gaurish Shukla",
            "Supraja",
            "Gazala",
            "Malathy Rajkumar",
            "Sameer"];
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