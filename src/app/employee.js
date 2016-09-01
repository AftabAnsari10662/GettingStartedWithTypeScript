define(["require", "exports"], function (require, exports) {
    "use strict";
    var Employee = (function () {
        function Employee(name) {
            this._name = name;
        }
        Object.defineProperty(Employee.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Employee.prototype.doWork = function () {
            var str = this._name + " is working";
            console.info(str);
        };
        return Employee;
    }());
    exports.Employee = Employee;
});
