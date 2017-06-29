(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PhoneDetailController = (function () {
        function PhoneDetailController($routeParams, phone) {
            var _this = this;
            var phoneId = $routeParams['phoneId'];
            phone.get(phoneId).subscribe(function (data) {
                _this.phone = data;
                _this.setImage(data.images[0]);
            });
        }
        PhoneDetailController.prototype.setImage = function (imageUrl) {
            this.mainImageUrl = imageUrl;
        };
        PhoneDetailController.$inject = ['$routeParams', 'phone'];
        return PhoneDetailController;
    }());
    angular.
        module('phoneDetail').
        component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: PhoneDetailController
    });
});
