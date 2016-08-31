define(["require", "exports"], function (require, exports) {
    "use strict";
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
            this.person = "Having Fun with Typescript!";
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        Greeter.prototype.sayHello = function () {
            return "Helloo!!, " + this.greeting + " ";
        };
        Greeter.prototype.sayGoodBye = function () {
            return "Good Bye!" + this.greeting;
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
    var greeter = new Greeter("Aftab");
    console.log(greeter.greet());
    console.log(greeter.sayHello());
});
//  

//# sourceMappingURL=Greeter.js.map
