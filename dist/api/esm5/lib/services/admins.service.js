/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/admins.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var AdminsService = /** @class */ (function (_super) {
    tslib_1.__extends(AdminsService, _super);
    function AdminsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = { headers: new HttpHeaders({ Accept: 'application/json' }) };
        _this.url = "http://localhost:7900/admin";
        return _this;
    }
    Object.defineProperty(AdminsService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "admin/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AdminsService.prototype.getActivity$ = /**
     * @return {?}
     */
    function () {
        console.log("0000000000000000");
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'activityList',
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.getTalents$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talent',
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.getYears$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'year',
        }));
    };
    /**
     * @param {?} classes
     * @return {?}
     */
    AdminsService.prototype.getStudentsByClass$ = /**
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentsByClass',
            params: { classes: classes }
        }));
    };
    /**
     * @param {?} newStudent
     * @return {?}
     */
    AdminsService.prototype.insertStudents$ = /**
     * @param {?} newStudent
     * @return {?}
     */
    function (newStudent) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertStudents',
            params: newStudent
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.Search$ = /**
     * @return {?}
     */
    function () {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'Search',
        }));
    };
    /**
     * @param {?} letter
     * @return {?}
     */
    AdminsService.prototype.getStudentsForFilter = /**
     * @param {?} letter
     * @return {?}
     */
    function (letter) {
        return this.http.get(this.url + "/studentsList/" + letter);
    };
    /**
     * @param {?} form
     * @return {?}
     */
    AdminsService.prototype.insertTaskForStudent = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTaskForStudent',
            params: form
        }));
    };
    /**
     * @param {?} nameTalent
     * @return {?}
     */
    AdminsService.prototype.addNewTalent$ = /**
     * @param {?} nameTalent
     * @return {?}
     */
    function (nameTalent) {
        console.log(nameTalent);
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTalent',
            params: nameTalent
        }));
    };
    /**
     * @param {?} nameActivity
     * @return {?}
     */
    AdminsService.prototype.addNewActivity$ = /**
     * @param {?} nameActivity
     * @return {?}
     */
    function (nameActivity) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertActivity',
            params: nameActivity
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.getDate$ = /**
     * @return {?}
     */
    function () {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getDate'
        }));
    };
    /**
     * @param {?} Date
     * @return {?}
     */
    AdminsService.prototype.insertDate = /**
     * @param {?} Date
     * @return {?}
     */
    function (Date) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertDate',
            body: { Date: Date }
        }));
    };
    /**
     * @return {?}
     */
    AdminsService.prototype.updateClass$ = /**
     * @return {?}
     */
    function () {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateClass'
        }));
    };
    /**
     * @param {?} fileToUpload
     * @return {?}
     */
    AdminsService.prototype.postFile$ = /**
     * @param {?} fileToUpload
     * @return {?}
     */
    function (fileToUpload) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'files',
            body: fileToUpload,
        }));
    };
    AdminsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ AdminsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AdminsService_Factory() { return new AdminsService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: AdminsService, providedIn: "root" });
    return AdminsService;
}(HttpServiceBase));
export { AdminsService };
if (false) {
    /** @type {?} */
    AdminsService.prototype.options;
    /** @type {?} */
    AdminsService.prototype.url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcGkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWRtaW5zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFpQixnQkFBZ0IsRUFBK0MsTUFBTSxNQUFNLENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBR21DLHlDQUFlO0lBSGxEO1FBQUEscUVBNkhDO1FBeEhDLGFBQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUV2RSxTQUFHLEdBQUcsNkJBQTZCLENBQUM7O0tBc0hyQztJQXBIQyxzQkFBWSxxQ0FBVTs7Ozs7UUFBdEI7WUFDRSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsV0FBUSxDQUFDO1FBQ2hELENBQUM7OztPQUFBOzs7O0lBRUQsb0NBQVk7OztJQUFaO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBa0IsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyRCxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGNBQWM7U0FDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBQ0QsbUNBQVc7OztJQUFYO1FBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFpQixJQUFJLGdCQUFnQixDQUFDO1lBQ3BELEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFD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QUNELG9DQUFZOzs7SUFBWjtRQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQzFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsYUFBYTtTQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBQ0QsaUNBQVM7Ozs7SUFBVCxVQUFVLFlBQVk7UUFJcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFTLElBQUksZ0JBQWdCLENBQUM7WUFDN0MsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsSUFBSSxFQUFFLFlBQVk7U0FFbkIsQ0FBQyxDQUFDLENBQUE7SUFFTCxDQUFDOztnQkExSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3dCQVJEO0NBbUlDLEFBN0hELENBR21DLGVBQWUsR0EwSGpEO1NBMUhZLGFBQWE7OztJQUV4QixnQ0FBdUU7O0lBRXZFLDRCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aXZpdHlNb2RlbCwgSHR0cFJlcXVlc3RNb2RlbCwgbmV3U3R1ZGVudE1vZGVsLCBTdHVkZW50TW9kZWwsIFRhbGVudHNNb2RlbCB9IGZyb20gJ3R5cGUnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluc1NlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZUJhc2Uge1xuXG4gIG9wdGlvbnMgPSB7IGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pIH07XG5cbiAgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0Ojc5MDAvYWRtaW5cIjtcbiAgXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofWFkbWluL2A7XG4gIH1cbiAgIFxuICBnZXRBY3Rpdml0eSQoKTogT2JzZXJ2YWJsZTxBY3Rpdml0eU1vZGVsW10+IHtcbiAgICBjb25zb2xlLmxvZyhcIjAwMDAwMDAwMDAwMDAwMDBcIik7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxBY3Rpdml0eU1vZGVsW10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnYWN0aXZpdHlMaXN0JyxcbiAgICB9KSlcbiAgfVxuICBnZXRUYWxlbnRzJCgpOiBPYnNlcnZhYmxlPFRhbGVudHNNb2RlbFtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPFRhbGVudHNNb2RlbFtdPihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ3RhbGVudCcsXG4gICAgfSkpXG4gIH1cbiAgZ2V0WWVhcnMkKCk6IE9ic2VydmFibGU8VGFsZW50c01vZGVsW10+IHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8VGFsZW50c01vZGVsW10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAneWVhcicsXG4gICAgfSkpXG4gIH1cbiAgXG4gIGdldFN0dWRlbnRzQnlDbGFzcyQoY2xhc3Nlcyk6IE9ic2VydmFibGU8U3R1ZGVudE1vZGVsW10+IHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8U3R1ZGVudE1vZGVsW10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0U3R1ZGVudHNCeUNsYXNzJyxcbiAgICAgIHBhcmFtczogeyBjbGFzc2VzIH1cbiAgICB9KSlcbiAgfVxuICBpbnNlcnRTdHVkZW50cyQobmV3U3R1ZGVudDpuZXdTdHVkZW50TW9kZWwpOiBPYnNlcnZhYmxlPFN0dWRlbnRNb2RlbFtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPFN0dWRlbnRNb2RlbFtdPihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2luc2VydFN0dWRlbnRzJyxcbiAgICAgIHBhcmFtczogbmV3U3R1ZGVudFxuICAgIH0pKVxuICB9XG5cbiAgU2VhcmNoJCgpOiBPYnNlcnZhYmxlPGFueVtdW10+IHtcblxuICAgIHJldHVybiB0aGlzLnBvc3QkPGFueVtdW10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnU2VhcmNoJyxcbiAgICB9KSlcbiAgfVxuICBnZXRTdHVkZW50c0ZvckZpbHRlcihsZXR0ZXI6c3RyaW5nKTpPYnNlcnZhYmxlPGFueVtdPntcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4oYCR7dGhpcy51cmx9L3N0dWRlbnRzTGlzdC8ke2xldHRlcn1gKVxuICB9XG4gIFxuICBpbnNlcnRUYXNrRm9yU3R1ZGVudChmb3JtKTpPYnNlcnZhYmxlPGFueVtdPntcblxuICAgIHJldHVybiB0aGlzLmdldCQ8YW55W10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnaW5zZXJ0VGFza0ZvclN0dWRlbnQnLFxuICAgICAgcGFyYW1zOiBmb3JtXG4gICAgfSkpXG4gIH1cbiAgYWRkTmV3VGFsZW50JChuYW1lVGFsZW50KSB7XG4gICAgY29uc29sZS5sb2cobmFtZVRhbGVudCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxvYmplY3Q+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnaW5zZXJ0VGFsZW50JyxcbiAgICAgIHBhcmFtczogbmFtZVRhbGVudFxuICAgIH0pKVxuICB9XG4gIGFkZE5ld0FjdGl2aXR5JChuYW1lQWN0aXZpdHkpIHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8b2JqZWN0PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2luc2VydEFjdGl2aXR5JyxcbiAgICAgIHBhcmFtczogbmFtZUFjdGl2aXR5XG4gICAgfSkpXG4gIH1cbiAgXG4gIGdldERhdGUkKCl7XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0RGF0ZSdcbiAgICB9KSlcbiAgfVxuICBpbnNlcnREYXRlKERhdGUpe1xuICAgIHJldHVybiB0aGlzLnBvc3QkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdpbnNlcnREYXRlJyxcbiAgICAgIGJvZHk6e0RhdGV9XG4gICAgfSkpXG4gIH1cbiAgdXBkYXRlQ2xhc3MkKCl7XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAndXBkYXRlQ2xhc3MnXG4gICAgfSkpXG4gIH1cbiAgcG9zdEZpbGUkKGZpbGVUb1VwbG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIHRoaXMucG9zdCQ8c3RyaW5nPihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2ZpbGVzJyxcbiAgICAgIGJvZHk6IGZpbGVUb1VwbG9hZCxcbiAgICAgIFxuICAgIH0pKVxuXG4gIH1cbiAgXG5cbn1cbiJdfQ==