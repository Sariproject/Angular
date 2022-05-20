/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/students.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var StudentsService = /** @class */ (function (_super) {
    tslib_1.__extends(StudentsService, _super);
    function StudentsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = "http://localhost:7900/student";
        return _this;
    }
    Object.defineProperty(StudentsService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "student/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    StudentsService.prototype.getStudentDetails$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentDetails',
            params: { id: id }
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    StudentsService.prototype.getStudentTasks$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentTasks',
            params: { id: id }
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    StudentsService.prototype.getStudentTalent$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentTalents',
            params: { id: id }
        }));
    };
    /**
     * @param {?} StudentId
     * @return {?}
     */
    StudentsService.prototype.getStudentbyStudentId$ = /**
     * @param {?} StudentId
     * @return {?}
     */
    function (StudentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentbyStudentId',
            params: { StudentId: StudentId }
        }));
    };
    /**
     * @param {?} StudentId
     * @return {?}
     */
    StudentsService.prototype.getYears$ = /**
     * @param {?} StudentId
     * @return {?}
     */
    function (StudentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getYears',
            params: { StudentId: StudentId }
        }));
    };
    /**
     * @param {?} TasksId
     * @return {?}
     */
    StudentsService.prototype.deleteTasks$ = /**
     * @param {?} TasksId
     * @return {?}
     */
    function (TasksId) {
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteTasks',
            params: { TasksId: TasksId }
        }));
    };
    /**
     * @param {?} UpdateTasks
     * @return {?}
     */
    StudentsService.prototype.UpdateTasks$ = /**
     * @param {?} UpdateTasks
     * @return {?}
     */
    function (UpdateTasks) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'UpdateTasks',
            body: UpdateTasks
        }));
    };
    Object.defineProperty(StudentsService.prototype, "CurrentStudent", {
        get: /**
         * @return {?}
         */
        function () {
            console.log(this.config);
            return this.studentDetails;
        },
        enumerable: true,
        configurable: true
    });
    StudentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StudentsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StudentsService_Factory() { return new StudentsService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: StudentsService, providedIn: "root" });
    return StudentsService;
}(HttpServiceBase));
export { StudentsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StudentsService.prototype.studentDetails;
    /** @type {?} */
    StudentsService.prototype.url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FwaS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdHVkZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUV0RDtJQUdxQywyQ0FBZTtJQUhwRDtRQUFBLHFFQTZFQztRQXRFQyxTQUFHLEdBQUcsK0JBQStCLENBQUM7O0tBc0V2QztJQW5FQyxzQkFBWSx1Q0FBVTs7Ozs7UUFBdEI7WUFFRSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsYUFBVSxDQUFDO1FBQ2xELENBQUM7OztPQUFBOzs7OztJQUVELDRDQUFrQjs7OztJQUFsQixVQUFtQixFQUFFO1FBRW5CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLE1BQU0sRUFBRSxFQUFDLEVBQUUsSUFBQSxFQUFDO1NBQ2IsQ0FBQyxDQUFDLENBQUE7SUFFTCxDQUFDOzs7OztJQUVELDBDQUFnQjs7OztJQUFoQixVQUFpQixFQUFFO1FBRWpCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE1BQU0sRUFBRSxFQUFDLEVBQUUsSUFBQSxFQUFDO1NBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7OztJQUVELDJDQUFpQjs7OztJQUFqQixVQUFrQixFQUFFO1FBRWxCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLE1BQU0sRUFBRSxFQUFDLEVBQUUsSUFBQSxFQUFDO1NBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7OztJQUNELGdEQUFzQjs7OztJQUF0QixVQUF1QixTQUFTO1FBRTlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsdUJBQXVCO1lBQy9CLE1BQU0sRUFBRSxFQUFDLFNBQVMsV0FBQSxFQUFDO1NBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7SUFDRCxtQ0FBUzs7OztJQUFULFVBQVUsU0FBUztRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxnQkFBZ0IsQ0FBQztZQUN6QyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLEVBQUMsU0FBUyxXQUFBLEVBQUM7U0FDcEIsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7OztJQUNELHNDQUFZOzs7O0lBQVosVUFBYSxPQUFPO1FBRWxCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQzVDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsYUFBYTtZQUNyQixNQUFNLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBQztTQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBQ0Qsc0NBQVk7Ozs7SUFBWixVQUFhLFdBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFTLElBQUksZ0JBQWdCLENBQUM7WUFDN0MsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLElBQUksRUFBRSxXQUFXO1NBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUNELHNCQUFJLDJDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOztnQkE1RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzBCQVJEO0NBbUZDLEFBN0VELENBR3FDLGVBQWUsR0EwRW5EO1NBMUVZLGVBQWU7Ozs7OztJQUcxQix5Q0FBMkI7O0lBQzNCLDhCQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3RNb2RlbCB9IGZyb20gJ3R5cGUnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRzU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XG5cblxuICBwcml2YXRlIHN0dWRlbnREZXRhaWxzOiBhbnlcbiAgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0Ojc5MDAvc3R1ZGVudFwiO1xuXG5cbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xuICAgIFxuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9c3R1ZGVudC9gO1xuICB9XG4gXG4gIGdldFN0dWRlbnREZXRhaWxzJChpZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0U3R1ZGVudERldGFpbHMnLFxuICAgICAgcGFyYW1zOiB7aWR9XG4gICAgfSkpXG5cbiAgfVxuXG4gIGdldFN0dWRlbnRUYXNrcyQoaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0U3R1ZGVudFRhc2tzJyxcbiAgICAgIHBhcmFtczoge2lkfVxuICAgIH0pKVxuICB9XG5cbiAgZ2V0U3R1ZGVudFRhbGVudCQoaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0U3R1ZGVudFRhbGVudHMnLFxuICAgICAgcGFyYW1zOiB7aWR9XG4gICAgfSkpXG4gIH1cbiAgZ2V0U3R1ZGVudGJ5U3R1ZGVudElkJChTdHVkZW50SWQpOiBPYnNlcnZhYmxlPGFueVtdW10+IHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2dldFN0dWRlbnRieVN0dWRlbnRJZCcsXG4gICAgICBwYXJhbXM6IHtTdHVkZW50SWR9XG4gICAgfSkpXG4gIH1cbiAgZ2V0WWVhcnMkKFN0dWRlbnRJZCk6IE9ic2VydmFibGU8YW55W11bXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0WWVhcnMnLFxuICAgICAgcGFyYW1zOiB7U3R1ZGVudElkfVxuICAgIH0pKVxuICB9XG4gIGRlbGV0ZVRhc2tzJChUYXNrc0lkKTogT2JzZXJ2YWJsZTxhbnlbXVtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5kZWxldGUkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdkZWxldGVUYXNrcycsXG4gICAgICBwYXJhbXM6IHtUYXNrc0lkfVxuICAgIH0pKVxuICB9XG4gIFVwZGF0ZVRhc2tzJChVcGRhdGVUYXNrcyl7XG4gICAgcmV0dXJuIHRoaXMucG9zdCQ8b2JqZWN0PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ1VwZGF0ZVRhc2tzJyxcbiAgICAgIGJvZHk6IFVwZGF0ZVRhc2tzXG4gICAgfSkpXG4gIH1cbiAgZ2V0IEN1cnJlbnRTdHVkZW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5zdHVkZW50RGV0YWlscztcbiAgfVxufVxuIl19