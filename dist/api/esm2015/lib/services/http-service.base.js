/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/http-service.base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
/**
 * @abstract
 */
export class HttpServiceBase {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    get$(httpRequest) {
        if (httpRequest.isText) {
            return this._get$(httpRequest);
        }
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    delete$(httpRequest) {
        return this.http.delete(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    post$(httpRequest) {
        console.log(httpRequest);
        if (httpRequest.isText) {
            return this._post$(httpRequest);
        }
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    request$(httpRequest) {
        return this.http.request('GET', httpRequest.fullUrl, {
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    requestPost$(httpRequest) {
        return this.http.request('POST', httpRequest.fullUrl, {
            body: Object.assign({}, httpRequest.body),
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _get$(httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _post$(httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
}
HttpServiceBase.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpServiceBase.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
if (false) {
    /** @type {?} */
    HttpServiceBase.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zZXJ2aWNlLmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcGkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC1zZXJ2aWNlLmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFJL0QsTUFBTSxPQUFnQixlQUFlOzs7OztJQUluQyxZQUNZLElBQWdCLEVBQ2hCLE1BQTRCO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFIeEMsVUFBSyxHQUFHLENBQUMsQ0FBQztJQUlOLENBQUM7Ozs7OztJQUVMLElBQUksQ0FBYSxXQUE2QjtRQUM1QyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FBRTtRQUUzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLG9CQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFhLFdBQTZCO1FBRS9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sb0JBQU8sV0FBVyxDQUFDLFVBQVUsQ0FBRSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQWEsV0FBNkI7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FBRTtRQUM1RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksRUFDNUQsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLG9CQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUUsRUFBRSxDQUFDLENBQUM7SUFFN0UsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBNkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDdEIsS0FBSyxFQUNMLFdBQVcsQ0FBQyxPQUFPLEVBQ25CO1lBQ0UsTUFBTSxvQkFBTyxXQUFXLENBQUMsVUFBVSxDQUFFO1lBQ3JDLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFlBQVksRUFBRSxNQUFNO1NBRXJCLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFdBQTZCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ3RCLE1BQU0sRUFDTixXQUFXLENBQUMsT0FBTyxFQUNuQjtZQUVFLElBQUksb0JBQU8sV0FBVyxDQUFDLElBQUksQ0FBRTtZQUM3QixNQUFNLG9CQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUU7WUFDckMsT0FBTyxFQUFFLFVBQVU7WUFDbkIsWUFBWSxFQUFFLE1BQU07U0FFckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sS0FBSyxDQUFDLFdBQTZCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sb0JBQU8sV0FBVyxDQUFDLFVBQVUsQ0FBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzdHLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxXQUE2QjtRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sb0JBQU8sV0FBVyxDQUFDLFVBQVUsQ0FBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hJLENBQUM7OztZQTdERixVQUFVOzs7O1lBUEYsVUFBVTtZQUlWLG9CQUFvQjs7OztJQU8zQixnQ0FBVTs7Ozs7SUFFUiwrQkFBMEI7Ozs7O0lBQzFCLGlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcblxyXG5cclxuICBpbmRleCA9IDA7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByb3RlY3RlZCBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkgeyB9XHJcblxyXG4gIGdldCQ8VCA9IHN0cmluZz4oaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0TW9kZWwpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIGlmIChodHRwUmVxdWVzdC5pc1RleHQpIHsgcmV0dXJuIHRoaXMuX2dldCQoaHR0cFJlcXVlc3QpOyB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oaHR0cFJlcXVlc3QuZnVsbFVybCwgeyBwYXJhbXM6IHsgLi4uaHR0cFJlcXVlc3QuZnVsbFBhcmFtcyB9IH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlJDxUID0gc3RyaW5nPihodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8VD4ge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFQ+KGh0dHBSZXF1ZXN0LmZ1bGxVcmwsIHsgcGFyYW1zOiB7IC4uLmh0dHBSZXF1ZXN0LmZ1bGxQYXJhbXMgfSB9KTtcclxuICB9XHJcblxyXG4gIHBvc3QkPFQgPSBzdHJpbmc+KGh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdE1vZGVsKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICBjb25zb2xlLmxvZyhodHRwUmVxdWVzdCk7XHJcbiAgICBpZiAoaHR0cFJlcXVlc3QuaXNUZXh0KSB7IHJldHVybiB0aGlzLl9wb3N0JChodHRwUmVxdWVzdCk7IH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPihodHRwUmVxdWVzdC5mdWxsVXJsLCBodHRwUmVxdWVzdC5ib2R5LFxyXG4gICAgICB7IGhlYWRlcnM6IGh0dHBSZXF1ZXN0LmhlYWRlcnMsIHBhcmFtczogeyAuLi5odHRwUmVxdWVzdC5mdWxsUGFyYW1zIH0gfSk7XHJcbiAgICAgXHJcbiAgfVxyXG5cclxuICByZXF1ZXN0JChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIGh0dHBSZXF1ZXN0LmZ1bGxVcmwsXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHsgLi4uaHR0cFJlcXVlc3QuZnVsbFBhcmFtcyB9LFxyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXHJcblxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RQb3N0JChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICBodHRwUmVxdWVzdC5mdWxsVXJsLFxyXG4gICAgICB7XHJcblxyXG4gICAgICAgIGJvZHk6IHsgLi4uaHR0cFJlcXVlc3QuYm9keSB9LFxyXG4gICAgICAgIHBhcmFtczogeyAuLi5odHRwUmVxdWVzdC5mdWxsUGFyYW1zIH0sXHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcclxuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0JChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChodHRwUmVxdWVzdC5mdWxsVXJsLCB7IHBhcmFtczogeyAuLi5odHRwUmVxdWVzdC5mdWxsUGFyYW1zIH0sIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcG9zdCQoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0TW9kZWwpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGh0dHBSZXF1ZXN0LmZ1bGxVcmwsIGh0dHBSZXF1ZXN0LmJvZHksIHsgcGFyYW1zOiB7IC4uLmh0dHBSZXF1ZXN0LmZ1bGxQYXJhbXMgfSwgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=