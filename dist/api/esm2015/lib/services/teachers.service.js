/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/teachers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class TeachersService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.students = [];
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}teacher/`;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getTeacherDetails$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'teacherDetails',
            params: { id }
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStudentsById$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'students',
            params: { id }
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
     * @param {?} classes
     * @param {?} talentId
     * @return {?}
     */
    getOneTalentForClass$(classes, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talents',
            params: { classes, talentId }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    addTalentForStudent$(firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addTalent',
            params: { firstName, LastName, talentId }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talent
     * @param {?} details
     * @return {?}
     */
    updateMoreDetails$(firstName, LastName, talent, details) {
        if (details == '') {
            details = 'null';
        }
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateMoreDetails',
            params: { firstName, LastName, talent, details }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    deleteTalentForStudent$(firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteTalent',
            params: { firstName, LastName, talentId }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    addAdviceForStudent$(firstName, LastName, talentId, count) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addAdvice',
            params: { firstName, LastName, talentId, count }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    updateAdviceForStudent$(firstName, LastName, talentId, count) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateAdvice',
            params: { firstName, LastName, talentId, count }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    deleteAdviceForStudent$(firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteAdvice',
            params: { firstName, LastName, talentId }
        }));
    }
    /**
     * @param {?} nameTalent
     * @return {?}
     */
    addNewTalent$(nameTalent) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTalent',
            params: { nameTalent }
        }));
    }
    /**
     * @return {?}
     */
    get CurrentTeacher() {
        return this.teacherDetails;
    }
    /**
     * @return {?}
     */
    get CurrentStudents() {
        return this.students;
    }
}
TeachersService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ TeachersService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TeachersService_Factory() { return new TeachersService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: TeachersService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TeachersService.prototype.teacherDetails;
    /** @type {?} */
    TeachersService.prototype.students;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FwaS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90ZWFjaGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQW9CLGdCQUFnQixFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFNdEQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZUFBZTtJQUhwRDs7UUFNRSxhQUFRLEdBQUcsRUFBRSxDQUFBO0tBK0dkOzs7OztJQTVHQyxJQUFZLFVBQVU7UUFDcEIsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsVUFBVSxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsRUFBRTtRQUVuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxnQkFBZ0IsQ0FBQztZQUN6QyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7U0FDZixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBRTtRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQVEsSUFBSSxnQkFBZ0IsQ0FBQztZQUMzQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFO1NBQ2YsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUVULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBaUIsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwRCxHQUFHLEVBQUUsSUFBSSxDQUFDLFVB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LE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLGdCQUFnQixDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUU7U0FDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7WUFwSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUdDLHlDQUFtQjs7SUFDbkIsbUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFkdmljZUZvclN0dWRlbnQsIEh0dHBSZXF1ZXN0TW9kZWwsIFRhbGVudHNNb2RlbCB9IGZyb20gJ3R5cGUnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGVhY2hlcnNTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcblxuICB0ZWFjaGVyRGV0YWlsczogYW55XG4gIHN0dWRlbnRzID0gW11cblxuXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofXRlYWNoZXIvYDtcbiAgfVxuXG4gIGdldFRlYWNoZXJEZXRhaWxzJChpZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAndGVhY2hlckRldGFpbHMnLFxuICAgICAgcGFyYW1zOiB7IGlkIH1cbiAgICB9KSlcbiAgfVxuXG4gIGdldFN0dWRlbnRzQnlJZCQoaWQpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueVtdPihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ3N0dWRlbnRzJyxcbiAgICAgIHBhcmFtczogeyBpZCB9XG4gICAgfSkpXG4gIH1cblxuICBnZXRUYWxlbnRzJCgpOiBPYnNlcnZhYmxlPFRhbGVudHNNb2RlbFtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPFRhbGVudHNNb2RlbFtdPihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ3RhbGVudCcsXG4gICAgfSkpXG4gIH1cblxuICBnZXRPbmVUYWxlbnRGb3JDbGFzcyQoY2xhc3NlcywgdGFsZW50SWQpOiBPYnNlcnZhYmxlPEFkdmljZUZvclN0dWRlbnRbXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxBZHZpY2VGb3JTdHVkZW50W10+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAndGFsZW50cycsXG4gICAgICBwYXJhbXM6IHsgY2xhc3NlcywgdGFsZW50SWQgfVxuICAgIH0pKVxuICB9XG5cbiAgYWRkVGFsZW50Rm9yU3R1ZGVudCQoZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50SWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JDxhbnk+KG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnYWRkVGFsZW50JyxcbiAgICAgIHBhcmFtczogeyBmaXJzdE5hbWUsIExhc3ROYW1lLCB0YWxlbnRJZCB9XG4gICAgfSkpXG4gIH1cblxuICB1cGRhdGVNb3JlRGV0YWlscyQoZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50LCBkZXRhaWxzKSB7XG5cbiAgICBpZiAoZGV0YWlscyA9PSAnJykgeyBkZXRhaWxzID0gJ251bGwnIH1cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICd1cGRhdGVNb3JlRGV0YWlscycsXG4gICAgICBwYXJhbXM6IHsgZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50LCBkZXRhaWxzIH1cbiAgICB9KSlcbiAgfVxuXG4gIGRlbGV0ZVRhbGVudEZvclN0dWRlbnQkKGZpcnN0TmFtZSwgTGFzdE5hbWUsIHRhbGVudElkKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2RlbGV0ZVRhbGVudCcsXG4gICAgICBwYXJhbXM6IHsgZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50SWQgfVxuICAgIH0pKVxuICB9XG5cbiAgYWRkQWR2aWNlRm9yU3R1ZGVudCQoZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50SWQsIGNvdW50KSB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdhZGRBZHZpY2UnLFxuICAgICAgcGFyYW1zOiB7IGZpcnN0TmFtZSwgTGFzdE5hbWUsIHRhbGVudElkLCBjb3VudCB9XG4gICAgfSkpXG4gIH1cblxuICB1cGRhdGVBZHZpY2VGb3JTdHVkZW50JChmaXJzdE5hbWUsIExhc3ROYW1lLCB0YWxlbnRJZCwgY291bnQpIHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ3VwZGF0ZUFkdmljZScsXG4gICAgICBwYXJhbXM6IHsgZmlyc3ROYW1lLCBMYXN0TmFtZSwgdGFsZW50SWQsIGNvdW50IH1cbiAgICB9KSlcbiAgfVxuXG4gIGRlbGV0ZUFkdmljZUZvclN0dWRlbnQkKGZpcnN0TmFtZSwgTGFzdE5hbWUsIHRhbGVudElkKSB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkPGFueT4obmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdkZWxldGVBZHZpY2UnLFxuICAgICAgcGFyYW1zOiB7IGZpcnN0TmFtZSwgTGFzdE5hbWUsIHRhbGVudElkIH1cbiAgICB9KSlcbiAgfVxuICBhZGROZXdUYWxlbnQkKG5hbWVUYWxlbnQpIHtcblxuICAgIHJldHVybiB0aGlzLmdldCQ8YW55PihuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2luc2VydFRhbGVudCcsXG4gICAgICBwYXJhbXM6IHsgbmFtZVRhbGVudCB9XG4gICAgfSkpXG4gIH1cblxuICBnZXQgQ3VycmVudFRlYWNoZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVhY2hlckRldGFpbHM7XG4gIH1cbiAgZ2V0IEN1cnJlbnRTdHVkZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHVkZW50cztcbiAgfVxufVxuIl19