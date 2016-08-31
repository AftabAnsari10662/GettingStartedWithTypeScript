define(["require", "exports", "./Greeter", "./Employee"], function (require, exports, Greeter_1, Employee_1) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.sayHello = function () {
            var name = "Aftab Ansari";
            var greeter = new Greeter_1.Greeter(name);
            var emp = new Employee_1.Employee(name);
            emp.doWork();
            console.log(greeter.greet());
        };
        return App;
    }());
    exports.App = App;
});
