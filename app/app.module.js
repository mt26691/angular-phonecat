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
        define(["require", "exports", "@angular/upgrade/static", "@angular/platform-browser", "@angular/core", "@angular/http", "rxjs/add/operator/toPromise", "rxjs/add/operator/map", "rxjs/add/observable/throw", "./core/phone/phone.service", "./phone-list/phone-list.component", "@angular/forms", "./ajs-upgraded-providers", "./phone-detail/phone-detail.component", "./core/checkmark/checkmark.pipe"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var static_1 = require("@angular/upgrade/static");
    var platform_browser_1 = require("@angular/platform-browser");
    var core_1 = require("@angular/core");
    var http_1 = require("@angular/http");
    require("rxjs/add/operator/toPromise");
    require("rxjs/add/operator/map");
    require("rxjs/add/observable/throw");
    var phone_service_1 = require("./core/phone/phone.service");
    var phone_list_component_1 = require("./phone-list/phone-list.component");
    var forms_1 = require("@angular/forms");
    var ajs_upgraded_providers_1 = require("./ajs-upgraded-providers");
    var phone_detail_component_1 = require("./phone-detail/phone-detail.component");
    var checkmark_pipe_1 = require("./core/checkmark/checkmark.pipe");
    var AppModule = (function () {
        function AppModule(upgrade) {
            this.upgrade = upgrade;
        }
        AppModule.prototype.ngDoBootstrap = function () {
            this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
        };
        AppModule = __decorate([
            core_1.NgModule({
                imports: [
                    platform_browser_1.BrowserModule,
                    static_1.UpgradeModule,
                    http_1.HttpModule,
                    forms_1.FormsModule
                ],
                providers: [
                    phone_service_1.Phone,
                    ajs_upgraded_providers_1.routeParamsProvider
                ],
                declarations: [
                    phone_list_component_1.PhoneListComponent,
                    phone_detail_component_1.PhoneDetailComponent,
                    checkmark_pipe_1.CheckmarkPipe
                ],
                entryComponents: [
                    phone_list_component_1.PhoneListComponent,
                    phone_detail_component_1.PhoneDetailComponent
                ]
            }),
            __metadata("design:paramtypes", [static_1.UpgradeModule])
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
});
