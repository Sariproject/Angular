/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/admins.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class AdminsService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.options = { headers: new HttpHeaders({ Accept: 'application/json' }) };
        this.url = "http://localhost:7900/admin";
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}admin/`;
    }
    /**
     * @return {?}
     */
    getActivity$() {
        console.log("0000000000000000");
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'activityList',
        }));
    }
    /**
     * @return {?}
     */
    getTalents$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talent',
        }));
    }
    /**
     * @return {?}
     */
    getYears$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'year',
        }));
    }
    /**
     * @param {?} classes
     * @return {?}
     */
    getStudentsByClass$(classes) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentsByClass',
            params: { classes }
        }));
    }
    /**
     * @param {?} newStudent
     * @return {?}
     */
    insertStudents$(newStudent) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertStudents',
            params: newStudent
        }));
    }
    /**
     * @return {?}
     */
    Search$() {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'Search',
        }));
    }
    /**
     * @param {?} letter
     * @return {?}
     */
    getStudentsForFilter(letter) {
        return this.http.get(`${this.url}/studentsList/${letter}`);
    }
    /**
     * @param {?} form
     * @return {?}
     */
    insertTaskForStudent(form) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTaskForStudent',
            params: form
        }));
    }
    /**
     * @param {?} nameTalent
     * @return {?}
     */
    addNewTalent$(nameTalent) {
        console.log(nameTalent);
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTalent',
            params: nameTalent
        }));
    }
    /**
     * @param {?} nameActivity
     * @return {?}
     */
    addNewActivity$(nameActivity) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertActivity',
            params: nameActivity
        }));
    }
    /**
     * @return {?}
     */
    getDate$() {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getDate'
        }));
    }
    /**
     * @param {?} Date
     * @return {?}
     */
    insertDate(Date) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertDate',
            body: { Date }
        }));
    }
    /**
     * @return {?}
     */
    updateClass$() {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateClass'
        }));
    }
    /**
     * @param {?} fileToUpload
     * @return {?}
     */
    postFile$(fileToUpload) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'files',
            body: fileToUpload,
        }));
    }
}
AdminsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ AdminsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AdminsService_Factory() { return new AdminsService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: AdminsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AdminsService.prototype.options;
    /** @type {?} */
    AdminsService.prototype.url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcGkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWRtaW5zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWlCLGdCQUFnQixFQUErQyxNQUFNLE1BQU0sQ0FBQztBQUNwRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLdEQsTUFBTSxPQUFPLGFBQWMsU0FBUSxlQUFlO0lBSGxEOztRQUtFLFlBQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUV2RSxRQUFHLEdBQUcsNkJBQTZCLENBQUM7S0FzSHJDOzs7OztJQXBIQyxJQUFZLFVBQVU7UUFDcEIsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsUUFBUSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBa0IsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyRCxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGNBQWM7U0FDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBQ0QsV0FBVztRQUVULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBaUIsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwRCxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBQ0QsU0FBUztRQUVQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBaUIsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwRCxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsT0FBTztRQUV6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQWlCLElBQUksZ0JBQWdCLENBQUM7WUFDcEQsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxvQkFBb0I7WUFDNUIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFO1NBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7SUFDRCxlQUFlLENBQUMsVUFBMEI7UUFFeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFpQixJQUFJLGdCQUFnQixDQUFDO1lBQ3BELEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLE1BQU0sRUFBRSxVQUFVO1NBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7OztJQUVELE9BQU87UUFFTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQVUsSUFBSSxnQkFBZ0IsQ0FBQztZQUM5QyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7OztJQUNELG9CQUFvQixDQUFDLE1BQWE7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxHQUFHLGlCQUFpQixNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQ25FLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsSUFBSTtRQUV2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQVEsSUFBSSxnQkFBZ0IsQ0FBQztZQUMzQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLHNCQUFzQjtZQUM5QixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7SUFDRCxhQUFhLENBQUMsVUFBVTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBUyxJQUFJLGdCQUFnQixDQUFDO1lBQzVDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixNQUFNLEVBQUUsVUFBVTtTQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLFlBQVk7UUFFMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFTLElBQUksZ0JBQWdCLENBQUM7WUFDNUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsTUFBTSxFQUFFLFlBQVk7U0FDckIsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQzFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBQ0QsVUFBVSxDQUFDLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQU0sSUFBSSxnQkFBZ0IsQ0FBQztZQUMxQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFDLEVBQUMsSUFBSSxFQUFDO1NBQ1osQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBQ0QsWUFBWTtRQUVWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQzFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsYUFBYTtTQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBQ0QsU0FBUyxDQUFDLFlBQVk7UUFJcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFTLElBQUksZ0JBQWdCLENBQUM7WUFDN0MsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsSUFBSSxFQUFFLFlBQVk7U0FFbkIsQ0FBQyxDQUFDLENBQUE7SUFFTCxDQUFDOzs7WUExSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUdDLGdDQUF1RTs7SUFFdkUsNEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpdml0eU1vZGVsLCBIdHRwUmVxdWVzdE1vZGVsLCBuZXdTdHVkZW50TW9kZWwsIFN0dWRlbnRNb2RlbCwgVGFsZW50c01vZGVsIH0gZnJvbSAndHlwZSc7XG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5zU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XG5cbiAgb3B0aW9ucyA9IHsgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSkgfTtcblxuICB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzkwMC9hZG1pblwiO1xuICBcbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9YWRtaW4vYDtcbiAgfVxuICAgXG4gIGdldEFjdGl2aXR5JCgpOiBPYnNlcnZhYmxlPEFjdGl2aXR5TW9kZWxbXT4ge1xuICAgIGNvbnNvbGUubG9nKFwiMDAwMDAwMDAwMDAwMDAwMFwiKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5nZXQkPEFjdGl2aXR5TW9kZWxbXT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdhY3Rpdml0eUxpc3QnLFxuICAgIH0pKVxuICB9XG4gIGdldFRhbGVudHMkKCk6IE9ic2VydmFibGU8VGFsZW50c01vZGVsW10+IHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8VGFsZW50c01vZGVsW10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAndGFsZW50JyxcbiAgICB9KSlcbiAgfVxuICBnZXRZZWFycyQoKTogT2JzZXJ2YWJsZTxUYWxlbnRzTW9kZWxbXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxUYWxlbnRzTW9kZWxbXT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICd5ZWFyJyxcbiAgICB9KSlcbiAgfVxuICBcbiAgZ2V0U3R1ZGVudHNCeUNsYXNzJChjbGFzc2VzKTogT2JzZXJ2YWJsZTxTdHVkZW50TW9kZWxbXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxTdHVkZW50TW9kZWxbXT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdnZXRTdHVkZW50c0J5Q2xhc3MnLFxuICAgICAgcGFyYW1zOiB7IGNsYXNzZXMgfVxuICAgIH0pKVxuICB9XG4gIGluc2VydFN0dWRlbnRzJChuZXdTdHVkZW50Om5ld1N0dWRlbnRNb2RlbCk6IE9ic2VydmFibGU8U3R1ZGVudE1vZGVsW10+IHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8U3R1ZGVudE1vZGVsW10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnaW5zZXJ0U3R1ZGVudHMnLFxuICAgICAgcGFyYW1zOiBuZXdTdHVkZW50XG4gICAgfSkpXG4gIH1cblxuICBTZWFyY2gkKCk6IE9ic2VydmFibGU8YW55W11bXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMucG9zdCQ8YW55W11bXT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdTZWFyY2gnLFxuICAgIH0pKVxuICB9XG4gIGdldFN0dWRlbnRzRm9yRmlsdGVyKGxldHRlcjpzdHJpbmcpOk9ic2VydmFibGU8YW55W10+e1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdPihgJHt0aGlzLnVybH0vc3R1ZGVudHNMaXN0LyR7bGV0dGVyfWApXG4gIH1cbiAgXG4gIGluc2VydFRhc2tGb3JTdHVkZW50KGZvcm0pOk9ic2VydmFibGU8YW55W10+e1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnlbXT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdpbnNlcnRUYXNrRm9yU3R1ZGVudCcsXG4gICAgICBwYXJhbXM6IGZvcm1cbiAgICB9KSlcbiAgfVxuICBhZGROZXdUYWxlbnQkKG5hbWVUYWxlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhuYW1lVGFsZW50KTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5nZXQkPG9iamVjdD4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdpbnNlcnRUYWxlbnQnLFxuICAgICAgcGFyYW1zOiBuYW1lVGFsZW50XG4gICAgfSkpXG4gIH1cbiAgYWRkTmV3QWN0aXZpdHkkKG5hbWVBY3Rpdml0eSkge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxvYmplY3Q+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnaW5zZXJ0QWN0aXZpdHknLFxuICAgICAgcGFyYW1zOiBuYW1lQWN0aXZpdHlcbiAgICB9KSlcbiAgfVxuICBcbiAgZ2V0RGF0ZSQoKXtcblxuICAgIHJldHVybiB0aGlzLnBvc3QkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdnZXREYXRlJ1xuICAgIH0pKVxuICB9XG4gIGluc2VydERhdGUoRGF0ZSl7XG4gICAgcmV0dXJuIHRoaXMucG9zdCQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2luc2VydERhdGUnLFxuICAgICAgYm9keTp7RGF0ZX1cbiAgICB9KSlcbiAgfVxuICB1cGRhdGVDbGFzcyQoKXtcblxuICAgIHJldHVybiB0aGlzLnBvc3QkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICd1cGRhdGVDbGFzcydcbiAgICB9KSlcbiAgfVxuICBwb3N0RmlsZSQoZmlsZVRvVXBsb2FkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBcbiAgICBcbiAgICBcbiAgICByZXR1cm4gdGhpcy5wb3N0JDxzdHJpbmc+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZmlsZXMnLFxuICAgICAgYm9keTogZmlsZVRvVXBsb2FkLFxuICAgICAgXG4gICAgfSkpXG5cbiAgfVxuICBcblxufVxuIl19