/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ConfigurationService.prototype.initConfiguration = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        return combineLatest(this.http.get(path + "/ipConfig.json"), this.http.get(path + "/settingsConfig.json")).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var _a;
            return _a = tslib_1.__read(response, 2), _this.ips = _a[0], _this.settingConfig = _a[1], response;
        })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return console.log(_this.ips, "lll"); }))).toPromise();
    };
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject(i1.HttpClient)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
export { ConfigurationService };
if (false) {
    /** @type {?} */
    ConfigurationService.prototype.ips;
    /** @type {?} */
    ConfigurationService.prototype.settingConfig;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBpLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBR3JDO0lBT0UsOEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7OztJQUV6QyxnREFBaUI7Ozs7SUFBakIsVUFBa0IsSUFBSTtRQUF0QixpQkFVQztRQVJDLE9BQU8sYUFBYSxDQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLG1CQUFnQixDQUFDLEVBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQixJQUFJLHlCQUFzQixDQUFDLENBQzdELENBQUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFBLFFBQVE7O1lBQUksT0FBQSxnQ0FBeUMsRUFBeEMsaUJBQVEsRUFBRSwyQkFBa0IsRUFBSSxRQUFRO1FBQXpDLENBQXlDLEVBQUMsRUFDMUQsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBRTdDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsVUFBVTs7OytCQUFuQjtDQTBCQyxBQXBCRCxJQW9CQztTQWpCWSxvQkFBb0I7OztJQUMvQixtQ0FBYzs7SUFDZCw2Q0FBOEI7Ozs7O0lBRWxCLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJcENvbmZpZywgU2V0dGluZ3NDb25maWcgfSBmcm9tICd0eXBlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2Uge1xuICBpcHM6IElwQ29uZmlnO1xuICBzZXR0aW5nQ29uZmlnOiBTZXR0aW5nc0NvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGluaXRDb25maWd1cmF0aW9uKHBhdGgpOiBQcm9taXNlPGFueT4ge1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5odHRwLmdldDxJcENvbmZpZz4oYCR7cGF0aH0vaXBDb25maWcuanNvbmApLFxuICAgICAgdGhpcy5odHRwLmdldDxTZXR0aW5nc0NvbmZpZz4oYCR7cGF0aH0vc2V0dGluZ3NDb25maWcuanNvbmApXG4gICAgKS5waXBlKFxuICAgICAgdGFwKHJlc3BvbnNlID0+IFt0aGlzLmlwcywgdGhpcy5zZXR0aW5nQ29uZmlnXSA9IHJlc3BvbnNlKSxcbiAgICAgIHRhcChyZXNwb25zZSA9PiBjb25zb2xlLmxvZyh0aGlzLmlwcyxcImxsbFwiKSksXG4gICAgICBcbiAgICApLnRvUHJvbWlzZSgpO1xuICB9XG59XG4iXX0=