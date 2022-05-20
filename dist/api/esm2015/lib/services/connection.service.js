/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/connection.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class ConnectionService extends HttpServiceBase {
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        console.log(this.config);
        return `${this.config.ips.servicePath}`;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getTypeUser$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: id
        }));
    }
}
ConnectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ConnectionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConnectionService_Factory() { return new ConnectionService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: ConnectionService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBpLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Nvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUt0RCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTs7Ozs7SUFFcEQsSUFBWSxVQUFVO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELFlBQVksQ0FBQyxFQUFVO1FBRXJCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsRUFBRTtTQUVYLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBbEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0TW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gJ3R5cGUnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25TZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcblxuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWcpO1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9YDtcbiAgfVxuXG4gIFxuICBnZXRUeXBlVXNlciQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlck1vZGVsW10+IHtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiBpZFxuICAgICAgXG4gICAgfSkpO1xuICB9XG59XG4iXX0=