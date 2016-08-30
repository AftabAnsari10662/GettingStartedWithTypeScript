"use strict";
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
        this.person = "Having Fun with Typescript!";
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
exports.Greeter = Greeter;

//# sourceMappingURL=Greeter.js.map
