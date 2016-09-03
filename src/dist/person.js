define(["require", "exports"], function (require, exports) {
    "use strict";
    var Person = (function () {
        function Person(title) {
            this._title = title;
        }
        Object.defineProperty(Person.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    exports.Person = Person;
});
