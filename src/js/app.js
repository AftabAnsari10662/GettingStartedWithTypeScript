define(["require", "exports", "./Greeter"], function (require, exports, Greeter_1) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.sayHello = function () {
            var greeter = new Greeter_1.Greeter("Aftab Ansari");
            console.log(greeter.greet());
        };
        return App;
    }());
});

//# sourceMappingURL=app.js.map
