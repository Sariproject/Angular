/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/students.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class StudentsService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.url = "http://localhost:7900/student";
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}student/`;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStudentDetails$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentDetails',
            params: { id }
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStudentTasks$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentTasks',
            params: { id }
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStudentTalent$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentTalents',
            params: { id }
        }));
    }
    /**
     * @param {?} StudentId
     * @return {?}
     */
    getStudentbyStudentId$(StudentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentbyStudentId',
            params: { StudentId }
        }));
    }
    /**
     * @param {?} StudentId
     * @return {?}
     */
    getYears$(StudentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getYears',
            params: { StudentId }
        }));
    }
    /**
     * @param {?} TasksId
     * @return {?}
     */
    deleteTasks$(TasksId) {
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteTasks',
            params: { TasksId }
        }));
    }
    /**
     * @param {?} UpdateTasks
     * @return {?}
     */
    UpdateTasks$(UpdateTasks) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'UpdateTasks',
            body: UpdateTasks
        }));
    }
    /**
     * @return {?}
     */
    get CurrentStudent() {
        console.log(this.config);
        return this.studentDetails;
    }
}
StudentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ StudentsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StudentsService_Factory() { return new StudentsService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: StudentsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    StudentsService.prototype.studentDetails;
    /** @type {?} */
    StudentsService.prototype.url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FwaS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdHVkZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBS3RELE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQWU7SUFIcEQ7O1FBT0UsUUFBRyxHQUFHLCtCQUErQixDQUFDO0tBc0V2Qzs7Ozs7SUFuRUMsSUFBWSxVQUFVO1FBRXBCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLFVBQVUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEVBQUU7UUFFbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksZ0JBQWdCLENBQUM7WUFDekMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFDO1NBQ2IsQ0FBQyxDQUFDLENBQUE7SUFFTCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQUU7UUFFakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksZ0JBQWdCLENBQUM7WUFDekMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFDO1NBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQUU7UUFFbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksZ0JBQWdCLENBQUM7WUFDekMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFDO1NBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7OztJQUNELHNCQUFzQixDQUFDLFNBQVM7UUFFOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksZ0JBQWdCLENBQUM7WUFDekMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0IsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFDO1NBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7SUFDRCxTQUFTLENBQUMsU0FBUztRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxnQkFBZ0IsQ0FBQztZQUN6QyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFDO1NBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsT0FBTztRQUVsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQU0sSUFBSSxnQkFBZ0IsQ0FBQztZQUM1QyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGFBQWE7WUFDckIsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFDO1NBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsV0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQVMsSUFBSSxnQkFBZ0IsQ0FBQztZQUM3QyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGFBQWE7WUFDckIsSUFBSSxFQUFFLFdBQVc7U0FDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7WUE1RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7OztJQUlDLHlDQUEyQjs7SUFDM0IsOEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZSc7XG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R1ZGVudHNTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcblxuXG4gIHByaXZhdGUgc3R1ZGVudERldGFpbHM6IGFueVxuICB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzkwMC9zdHVkZW50XCI7XG5cblxuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XG4gICAgXG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1zdHVkZW50L2A7XG4gIH1cbiBcbiAgZ2V0U3R1ZGVudERldGFpbHMkKGlkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdnZXRTdHVkZW50RGV0YWlscycsXG4gICAgICBwYXJhbXM6IHtpZH1cbiAgICB9KSlcblxuICB9XG5cbiAgZ2V0U3R1ZGVudFRhc2tzJChpZCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdnZXRTdHVkZW50VGFza3MnLFxuICAgICAgcGFyYW1zOiB7aWR9XG4gICAgfSkpXG4gIH1cblxuICBnZXRTdHVkZW50VGFsZW50JChpZCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdnZXRTdHVkZW50VGFsZW50cycsXG4gICAgICBwYXJhbXM6IHtpZH1cbiAgICB9KSlcbiAgfVxuICBnZXRTdHVkZW50YnlTdHVkZW50SWQkKFN0dWRlbnRJZCk6IE9ic2VydmFibGU8YW55W11bXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0U3R1ZGVudGJ5U3R1ZGVudElkJyxcbiAgICAgIHBhcmFtczoge1N0dWRlbnRJZH1cbiAgICB9KSlcbiAgfVxuICBnZXRZZWFycyQoU3R1ZGVudElkKTogT2JzZXJ2YWJsZTxhbnlbXVtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdnZXRZZWFycycsXG4gICAgICBwYXJhbXM6IHtTdHVkZW50SWR9XG4gICAgfSkpXG4gIH1cbiAgZGVsZXRlVGFza3MkKFRhc2tzSWQpOiBPYnNlcnZhYmxlPGFueVtdW10+IHtcblxuICAgIHJldHVybiB0aGlzLmRlbGV0ZSQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2RlbGV0ZVRhc2tzJyxcbiAgICAgIHBhcmFtczoge1Rhc2tzSWR9XG4gICAgfSkpXG4gIH1cbiAgVXBkYXRlVGFza3MkKFVwZGF0ZVRhc2tzKXtcbiAgICByZXR1cm4gdGhpcy5wb3N0JDxvYmplY3Q+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnVXBkYXRlVGFza3MnLFxuICAgICAgYm9keTogVXBkYXRlVGFza3NcbiAgICB9KSlcbiAgfVxuICBnZXQgQ3VycmVudFN0dWRlbnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWcpO1xuICAgIHJldHVybiB0aGlzLnN0dWRlbnREZXRhaWxzO1xuICB9XG59XG4iXX0=