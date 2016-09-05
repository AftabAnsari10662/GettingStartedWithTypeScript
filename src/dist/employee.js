var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Person"], function (require, exports, Person_1) {
    "use strict";
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee(name, title, email) {
            _super.call(this, title);
            this._name = name;
            this._email = email;
        }
        Object.defineProperty(Employee.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "email", {
            get: function () {
                return this._email;
            },
            set: function (email) {
                this._email = email;
            },
            enumerable: true,
            configurable: true
        });
        Employee.prototype.doWork = function () {
            var str = this.name + "\n\t\t  " + this.title + " is working from office.";
            console.log(str.toUpperCase());
        };
        Employee.prototype.fillTimesheet = function () {
            console.log(this.name.toUpperCase() + "\n\t\t has filled the timesheet");
        };
        return Employee;
    }(Person_1.Person));
    exports.Employee = Employee;
    var Company = (function () {
        function Company(name) {
            this._name = name;
        }
        Object.defineProperty(Company.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        return Company;
    }());
    exports.Company = Company;
});
