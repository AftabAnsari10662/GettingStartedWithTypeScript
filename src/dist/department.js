define(["require", "exports", "./Employee"], function (require, exports, Employee_1) {
    "use strict";
    var Department = (function () {
        function Department(names) {
            this._employees = names.map(function (name) {
                return new Employee_1.Employee(name, "aftabansari@gmail.com");
            });
        }
        Department.prototype.doWork = function () {
            this._employees.forEach(function (employee) {
                console.log(employee.name + " is working!!!");
            });
        };
        return Department;
    }());
    exports.Department = Department;
});
