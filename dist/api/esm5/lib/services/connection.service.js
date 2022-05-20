/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/connection.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var ConnectionService = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectionService, _super);
    function ConnectionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ConnectionService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            console.log(this.config);
            return "" + this.config.ips.servicePath;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    ConnectionService.prototype.getTypeUser$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: id
        }));
    };
    ConnectionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ConnectionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConnectionService_Factory() { return new ConnectionService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: ConnectionService, providedIn: "root" });
    return ConnectionService;
}(HttpServiceBase));
export { ConnectionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBpLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Nvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFdEQ7SUFHdUMsNkNBQWU7SUFIdEQ7O0tBbUJDO0lBZEMsc0JBQVkseUNBQVU7Ozs7O1FBQXRCO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsT0FBTyxLQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQWEsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTs7Ozs7SUFHRCx3Q0FBWTs7OztJQUFaLFVBQWEsRUFBVTtRQUVyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLEVBQUU7U0FFWCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7O2dCQWxCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBUEQ7Q0F3QkMsQUFuQkQsQ0FHdUMsZUFBZSxHQWdCckQ7U0FoQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3RNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSAndHlwZSc7XG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvblNlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZUJhc2Uge1xuXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZyk7XG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1gO1xuICB9XG5cbiAgXG4gIGdldFR5cGVVc2VyJChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWxbXT4ge1xuICAgIFxuICAgIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246IGlkXG4gICAgICBcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==