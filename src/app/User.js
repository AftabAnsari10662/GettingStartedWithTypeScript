define(["require", "exports"], function (require, exports) {
    "use strict";
    var User = (function () {
        function User(name, primaryEmail, secondaryEmail) {
            this.name = "Aftab";
            this.primaryEmail = "aftab.ansari@Honeywell.com";
            this.secondaryEmail = "none";
            this.name = name;
            this.primaryEmail = primaryEmail;
            this.secondaryEmail = secondaryEmail;
        }
        User.prototype.getName = function () {
            return "Name : " + this.name;
        };
        User.prototype.getPrimaryEmail = function () {
            return "Primary Email : " + this.primaryEmail;
        };
        User.prototype.getSecondaryEmail = function () {
            return "Secondary Email : " + this.secondaryEmail;
        };
        return User;
    }());
    exports.User = User;
});
