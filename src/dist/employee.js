define(["require", "exports"], function (require, exports) {
    "use strict";
    var Employee = (function () {
        function Employee(name, email) {
            this._name = name;
            this._email = email;
        }
        Object.defineProperty(Employee.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "email", {
            get: function () {
                return this._email;
            },
            enumerable: true,
            configurable: true
        });
        Employee.prototype.doWork = function () {
            console.log(this.name + " is working from office.");
        };
        Employee.prototype.fillTimesheet = function () {
            console.log(this.name + " has filled the timesheet");
        };
        return Employee;
    }());
    exports.Employee = Employee;
});
