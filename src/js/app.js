"use strict";
var Greeter_1 = require("./Greeter");
var App = (function () {
    function App() {
    }
    App.prototype.sayHello = function () {
        var greeter = new Greeter_1.Greeter("Aftab Ansari");
        console.log(greeter.greet());
    };
    return App;
}());

//# sourceMappingURL=app.js.map
