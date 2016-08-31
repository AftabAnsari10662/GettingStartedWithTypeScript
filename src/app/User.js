define(["require", "exports"], function (require, exports) {
    "use strict";
    var User = (function () {
        function User(name, email) {
            this.name = "Aftab";
            this.email = "aftab.ansari@Honeywell.com";
            this.name = name;
            this.email = email;
        }
        User.prototype.getName = function () {
            return this.name;
        };
        User.prototype.getEmail = function () {
            return this.email;
        };
        return User;
    }());
    exports.User = User;
});
