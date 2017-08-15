"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var permission_service_1 = require("./permission.service");
var PermissionGuard = (function () {
    function PermissionGuard(_permissionService, router) {
        this._permissionService = _permissionService;
        this.router = router;
    }
    PermissionGuard.prototype.canActivate = function (route, state) {
        var data = route.data["Permission"];
        if (Array.isArray(data.Only) && Array.isArray(data.Except))
            throw "can't use both 'Only' and 'Except' in route data.";
        if (Array.isArray(data.Only)) {
            var hasDefined = this._permissionService.hasOneDefined(data.Only);
            if (hasDefined)
                return true;
            if (data.RedirectTo && data.RedirectTo !== undefined)
                this.router.navigate([data.RedirectTo]);
            return false;
        }
        if (Array.isArray(data.Except)) {
            var hasDefined = this._permissionService.hasOneDefined(data.Except);
            if (!hasDefined)
                return true;
            if (data.RedirectTo && data.RedirectTo !== undefined)
                this.router.navigate([data.RedirectTo]);
            return false;
        }
    };
    return PermissionGuard;
}());
PermissionGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [permission_service_1.PermissionService, router_1.Router])
], PermissionGuard);
exports.PermissionGuard = PermissionGuard;
//# sourceMappingURL=permission.guard.js.map