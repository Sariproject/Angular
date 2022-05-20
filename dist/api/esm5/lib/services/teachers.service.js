/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/teachers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var TeachersService = /** @class */ (function (_super) {
    tslib_1.__extends(TeachersService, _super);
    function TeachersService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.students = [];
        return _this;
    }
    Object.defineProperty(TeachersService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "teacher/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    TeachersService.prototype.getTeacherDetails$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'teacherDetails',
            params: { id: id }
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TeachersService.prototype.getStudentsById$ = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'students',
            params: { id: id }
        }));
    };
    /**
     * @return {?}
     */
    TeachersService.prototype.getTalents$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talent',
        }));
    };
    /**
     * @param {?} classes
     * @param {?} talentId
     * @return {?}
     */
    TeachersService.prototype.getOneTalentForClass$ = /**
     * @param {?} classes
     * @param {?} talentId
     * @return {?}
     */
    function (classes, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talents',
            params: { classes: classes, talentId: talentId }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    TeachersService.prototype.addTalentForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    function (firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addTalent',
            params: { firstName: firstName, LastName: LastName, talentId: talentId }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talent
     * @param {?} details
     * @return {?}
     */
    TeachersService.prototype.updateMoreDetails$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talent
     * @param {?} details
     * @return {?}
     */
    function (firstName, LastName, talent, details) {
        if (details == '') {
            details = 'null';
        }
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateMoreDetails',
            params: { firstName: firstName, LastName: LastName, talent: talent, details: details }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    TeachersService.prototype.deleteTalentForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    function (firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteTalent',
            params: { firstName: firstName, LastName: LastName, talentId: talentId }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    TeachersService.prototype.addAdviceForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    function (firstName, LastName, talentId, count) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addAdvice',
            params: { firstName: firstName, LastName: LastName, talentId: talentId, count: count }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    TeachersService.prototype.updateAdviceForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    function (firstName, LastName, talentId, count) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateAdvice',
            params: { firstName: firstName, LastName: LastName, talentId: talentId, count: count }
        }));
    };
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    TeachersService.prototype.deleteAdviceForStudent$ = /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    function (firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteAdvice',
            params: { firstName: firstName, LastName: LastName, talentId: talentId }
        }));
    };
    /**
     * @param {?} nameTalent
     * @return {?}
     */
    TeachersService.prototype.addNewTalent$ = /**
     * @param {?} nameTalent
     * @return {?}
     */
    function (nameTalent) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTalent',
            params: { nameTalent: nameTalent }
        }));
    };
    Object.defineProperty(TeachersService.prototype, "CurrentTeacher", {
        get: /**
         * @return {?}
         */
        function () {
            return this.teacherDetails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeachersService.prototype, "CurrentStudents", {
        get: /**
         * @return {?}
         */
        function () {
            return this.students;
        },
        enumerable: true,
        configurable: true
    });
    TeachersService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ TeachersService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TeachersService_Factory() { return new TeachersService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: TeachersService, providedIn: "root" });
    return TeachersService;
}(HttpServiceBase));
export { TeachersService };
if (false) {
    /** @type {?} */
    TeachersService.prototype.teacherDetails;
    /** @type {?} */
    TeachersService.prototype.students;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FwaS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90ZWFjaGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFvQixnQkFBZ0IsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBR3REO0lBR3FDLDJDQUFlO0lBSHBEO1FBQUEscUVBcUhDO1FBL0dDLGNBQVEsR0FBRyxFQUFFLENBQUE7O0tBK0dkO0lBNUdDLHNCQUFZLHVDQUFVOzs7OztRQUF0QjtZQUNFLE9BQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxhQUFVLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsNENBQWtCOzs7O0lBQWxCLFVBQW1CLEVBQUU7UUFFbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksZ0JBQWdCLENBQUM7WUFDekMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUU7U0FDZixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBRUQsMENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQUU7UUFFakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFRLElBQUksZ0JBQWdCLENBQUM7WUFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBQSxFQUFFO1NBQ2YsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFp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UyxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBRW5ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixNQUFNLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRTtTQUMxQyxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBQ0QsdUNBQWE7Ozs7SUFBYixVQUFjLFVBQVU7UUFFdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksZ0JBQWdCLENBQUM7WUFDekMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE1BQU0sRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFO1NBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVELHNCQUFJLDJDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNENBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7O2dCQXBIRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MEJBVEQ7Q0E0SEMsQUFySEQsQ0FHcUMsZUFBZSxHQWtIbkQ7U0FsSFksZUFBZTs7O0lBRTFCLHlDQUFtQjs7SUFDbkIsbUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFkdmljZUZvclN0dWRlbnQsIEh0dHBSZXF1ZXN0TW9kZWwsIFRhbGVudHNNb2RlbCB9IGZyb20gJ3R5cGUnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGVhY2hlcnNTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcblxuICB0ZWFjaGVyRGV0YWlsczogYW55XG4gIHN0dWRlbnRzID0gW11cblxuXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofXRlYWNoZXIvYDtcbiAgfVxuXG4gIGdldFRlYWNoZXJEZXRhaWxzJChpZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAndGVhY2hlckRldGFpbHMnLFxuICAgICAgcGFyYW1zOiB7IGlkIH1cbiAgICB9KSlcbiAgfVxuXG4gIGdldFN0dWRlbnRzQnlJZCQoaWQpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueVtdPihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ3N0dWRlbnRzJyxcbiAgICAgIHBhcmFtczogeyBpZCB9XG4gICAgfSkpXG4gIH1cblxuICBnZXRUYWxlbnRzJCgpOiBPYnNlcnZhYmxlPFRhbGVudHNNb2RlbFtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPFRhbGVudHNNb2RlbFtdPihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ3RhbGVudCcsXG4gICAgfSkpXG4gIH1cblxuICBnZXRPbmVUYWxlbnRGb3JDbGFzcyQoY2xhc3NlcywgdGFsZW50SWQpOiBPYnNlcnZhYmxlPEFkdmljZUZvclN0dWRlbnRbXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxBZHZpY2VGb3JTdHVkZW50W10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAndGFsZW50cycsXG4gICAgICBwYXJhbXM6IHsgY2xhc3NlcywgdGFsZW50SWQgfVxuICAgIH0pKVxuICB9XG5cbiAgYWRkVGFsZW50Rm9yU3R1ZGVudCQoZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50SWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnYWRkVGFsZW50JyxcbiAgICAgIHBhcmFtczogeyBmaXJzdE5hbWUsIExhc3ROYW1lLCB0YWxlbnRJZCB9XG4gICAgfSkpXG4gIH1cblxuICB1cGRhdGVNb3JlRGV0YWlscyQoZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50LCBkZXRhaWxzKSB7XG5cbiAgICBpZiAoZGV0YWlscyA9PSAnJykgeyBkZXRhaWxzID0gJ251bGwnIH1cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICd1cGRhdGVNb3JlRGV0YWlscycsXG4gICAgICBwYXJhbXM6IHsgZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50LCBkZXRhaWxzIH1cbiAgICB9KSlcbiAgfVxuXG4gIGRlbGV0ZVRhbGVudEZvclN0dWRlbnQkKGZpcnN0TmFtZSwgTGFzdE5hbWUsIHRhbGVudElkKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2RlbGV0ZVRhbGVudCcsXG4gICAgICBwYXJhbXM6IHsgZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50SWQgfVxuICAgIH0pKVxuICB9XG5cbiAgYWRkQWR2aWNlRm9yU3R1ZGVudCQoZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50SWQsIGNvdW50KSB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdhZGRBZHZpY2UnLFxuICAgICAgcGFyYW1zOiB7IGZpcnN0TmFtZSwgTGFzdE5hbWUsIHRhbGVudElkLCBjb3VudCB9XG4gICAgfSkpXG4gIH1cblxuICB1cGRhdGVBZHZpY2VGb3JTdHVkZW50JChmaXJzdE5hbWUsIExhc3ROYW1lLCB0YWxlbnRJZCwgY291bnQpIHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ3VwZGF0ZUFkdmljZScsXG4gICAgICBwYXJhbXM6IHsgZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50SWQsIGNvdW50IH1cbiAgICB9KSlcbiAgfVxuXG4gIGRlbGV0ZUFkdmljZUZvclN0dWRlbnQkKGZpcnN0TmFtZSwgTGFzdE5hbWUsIHRhbGVudElkKSB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdkZWxldGVBZHZpY2UnLFxuICAgICAgcGFyYW1zOiB7IGZpcnN0TmFtZSwgTGFzdE5hbWUsIHRhbGVudElkIH1cbiAgICB9KSlcbiAgfVxuICBhZGROZXdUYWxlbnQkKG5hbWVUYWxlbnQpIHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2luc2VydFRhbGVudCcsXG4gICAgICBwYXJhbXM6IHsgbmFtZVRhbGVudCB9XG4gICAgfSkpXG4gIH1cblxuICBnZXQgQ3VycmVudFRlYWNoZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVhY2hlckRldGFpbHM7XG4gIH1cbiAgZ2V0IEN1cnJlbnRTdHVkZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHVkZW50cztcbiAgfVxufVxuIl19