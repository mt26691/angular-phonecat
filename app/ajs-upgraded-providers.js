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
    var RouteParams = (function () {
        function RouteParams() {
        }
        return RouteParams;
    }());
    exports.RouteParams = RouteParams;
    function routeParamsFactory(i) {
        return i.get('$routeParams');
    }
    exports.routeParamsFactory = routeParamsFactory;
    exports.routeParamsProvider = {
        provide: RouteParams,
        useFactory: routeParamsFactory,
        deps: ['$injector']
    };
});
