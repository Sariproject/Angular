/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ConfigurationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    initConfiguration(path) {
        return combineLatest(this.http.get(`${path}/ipConfig.json`), this.http.get(`${path}/settingsConfig.json`)).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        response => [this.ips, this.settingConfig] = response)), tap((/**
         * @param {?} response
         * @return {?}
         */
        response => console.log(this.ips, "lll")))).toPromise();
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject(i1.HttpClient)); }, token: ConfigurationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBpLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFNckMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUkvQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7Ozs7SUFFekMsaUJBQWlCLENBQUMsSUFBSTtRQUVwQixPQUFPLGFBQWEsQ0FDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEVBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksc0JBQXNCLENBQUMsQ0FDN0QsQ0FBQyxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxRQUFRLEVBQUMsRUFDMUQsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBRTdDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFVBQVU7Ozs7O0lBVWpCLG1DQUFjOztJQUNkLDZDQUE4Qjs7Ozs7SUFFbEIsb0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElwQ29uZmlnLCBTZXR0aW5nc0NvbmZpZyB9IGZyb20gJ3R5cGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSB7XG4gIGlwczogSXBDb25maWc7XG4gIHNldHRpbmdDb25maWc6IFNldHRpbmdzQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgaW5pdENvbmZpZ3VyYXRpb24ocGF0aCk6IFByb21pc2U8YW55PiB7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmh0dHAuZ2V0PElwQ29uZmlnPihgJHtwYXRofS9pcENvbmZpZy5qc29uYCksXG4gICAgICB0aGlzLmh0dHAuZ2V0PFNldHRpbmdzQ29uZmlnPihgJHtwYXRofS9zZXR0aW5nc0NvbmZpZy5qc29uYClcbiAgICApLnBpcGUoXG4gICAgICB0YXAocmVzcG9uc2UgPT4gW3RoaXMuaXBzLCB0aGlzLnNldHRpbmdDb25maWddID0gcmVzcG9uc2UpLFxuICAgICAgdGFwKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHRoaXMuaXBzLFwibGxsXCIpKSxcbiAgICAgIFxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==