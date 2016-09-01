define(["require", "exports", "./Employee"], function (require, exports, Employee_1) {
    "use strict";
    var Department = (function () {
        function Department(names) {
            this.departmentName = "Engineering";
            console.log(names);
            this.departmentId = 100;
            this.employees = names.map(function (name) { return new Employee_1.Employee(name); });
        }
        Department.prototype.doWork = function () {
            this.employees.forEach(function (emp) {
                console.log(emp.name);
            });
        };
        return Department;
    }());
    exports.Department = Department;
});
