var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/upgrade/static", "@angular/core", "../core/phone/phone.service", "@angular/router"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var static_1 = require("@angular/upgrade/static");
    var core_1 = require("@angular/core");
    var phone_service_1 = require("../core/phone/phone.service");
    var router_1 = require("@angular/router");
    var PhoneDetailComponent = (function () {
        function PhoneDetailComponent(activatedRoute, phone) {
            var _this = this;
            phone.get(activatedRoute.snapshot.params['phoneId'])
                .subscribe(function (p) {
                _this.phone = p;
                _this.setImage(p.images[0]);
            });
        }
        PhoneDetailComponent.prototype.setImage = function (imageUrl) {
            this.mainImageUrl = imageUrl;
        };
        PhoneDetailComponent = __decorate([
            core_1.Component({
                selector: 'phone-detail',
                templateUrl: './phone-detail/phone-detail.template.html',
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute, phone_service_1.Phone])
        ], PhoneDetailComponent);
        return PhoneDetailComponent;
    }());
    exports.PhoneDetailComponent = PhoneDetailComponent;
    angular.module('phoneDetail')
        .directive('phoneDetail', static_1.downgradeComponent({ component: PhoneDetailComponent }));
});
