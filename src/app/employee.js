define(["require", "exports"], function (require, exports) {
    "use strict";
    var Employee = (function () {
        function Employee(name) {
            this._name = name;
        }
        Employee.prototype.doWork = function () {
            var str = this._name + " is working";
            console.info(str);
        };
        return Employee;
    }());
    exports.Employee = Employee;
});
