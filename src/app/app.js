define(["require", "exports", "./Greeter", "./Employee", "./User", "./Department"], function (require, exports, Greeter_1, Employee_1, User_1, Department_1) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.sayHello = function () {
            var name = "Aftab Ansari";
            var greeter = new Greeter_1.Greeter(name);
            var emp = new Employee_1.Employee(name);
            var user = new User_1.User("Ansari", "motuansari@gmail.com");
            var names = ["Aftab", "Anshul", "Rohit"];
            var department = new Department_1.Department(names);
            console.log("Department Name : " + department.departmentName);
            //console.log(`Department Id : ${department.departmentId}`)
            department.doWork();
            console.info(user.getName());
            console.info(user.getPrimaryEmail());
            console.warn(user.getSecondaryEmail());
            emp.doWork();
            console.log(greeter.greet());
        };
        return App;
    }());
    exports.App = App;
});
