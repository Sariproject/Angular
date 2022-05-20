/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.effects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AdminsService } from 'api';
import { of } from 'rxjs';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { ActivityActions } from './activity.actions';
var ActivityEffects = /** @class */ (function () {
    function ActivityEffects(actions$, AdminService) {
        var _this = this;
        this.actions$ = actions$;
        this.AdminService = AdminService;
        this.getActivity$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(ActivityActions.GetActivityAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return console.log('0000', { action: action }); })), exhaustMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.AdminService.getActivity$().pipe(map((/**
         * @param {?} Activity
         * @return {?}
         */
        function (Activity) { return ActivityActions.GetActivitySuccessAction({ Activity: Activity }); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(ActivityActions.GetActivityFailureAction({ error: error })); }))); }))); }));
        this.addActivity$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(ActivityActions.AddActivityAction), exhaustMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var activity = _a.activity;
            return _this.AdminService.addNewActivity$(activity).pipe(map((/**
             * @param {?} isAdded
             * @return {?}
             */
            function (isAdded) { return ActivityActions.AddActivitySuccessAction({ isAdded: isAdded }); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(ActivityActions.AddActivityFailureAction({ error: error })); })));
        }))); }));
    }
    ActivityEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ActivityEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AdminsService }
    ]; };
    return ActivityEffects;
}());
export { ActivityEffects };
if (false) {
    /** @type {?} */
    ActivityEffects.prototype.getActivity$;
    /** @type {?} */
    ActivityEffects.prototype.addActivity$;
    /**
     * @type {?}
     * @private
     */
    ActivityEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ActivityEffects.prototype.AdminService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N0b3JlLyIsInNvdXJjZXMiOlsibGliL2FjdGl2aXR5LXN0b3JlL2FjdGl2aXR5L2FjdGl2aXR5LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFVLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQXVCRSx5QkFDVSxRQUFpQixFQUNqQixZQUEyQjtRQUZyQyxpQkFHSztRQUZLLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWU7UUF0QnJDLGlCQUFZLEdBQUcsWUFBWTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRCxNQUFNLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEVBQ3pDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxFQUEvQixDQUErQixFQUFDLEVBQ2hELFVBQVU7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNuRCxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxlQUFlLENBQUMsd0JBQXdCLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLEVBQXRELENBQXNELEVBQUMsRUFDdkUsVUFBVTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxFQUF2RCxDQUF1RCxFQUMxRSxDQUFDLEVBSFksQ0FHWixFQUVILENBQ0YsRUFUaUMsQ0FTakMsRUFBQyxDQUFDO1FBRUgsaUJBQVksR0FBRyxZQUFZOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsRUFDekMsVUFBVTs7OztRQUFDLFVBQUMsRUFBWTtnQkFBVixzQkFBUTtZQUFPLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUMzRSxHQUFHOzs7O1lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxlQUFlLENBQUMsd0JBQXdCLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLEVBQXJELENBQXFELEVBQUMsRUFDckUsVUFBVTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxFQUF2RCxDQUF1RCxFQUMxRSxDQUFDO1FBSHlCLENBR3pCLEVBQ0gsQ0FDRixFQVBpQyxDQU9qQyxFQUFDLENBQUM7SUFLQyxDQUFDOztnQkExQk4sVUFBVTs7OztnQkFORixPQUFPO2dCQUNQLGFBQWE7O0lBZ0N0QixzQkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGVBQWU7OztJQUUxQix1Q0FTRzs7SUFFSCx1Q0FPRzs7Ozs7SUFHRCxtQ0FBeUI7Ozs7O0lBQ3pCLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBBZG1pbnNTZXJ2aWNlIH0gZnJvbSAnYXBpJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAsIGV4aGF1c3RNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQWN0aXZpdHlBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpdml0eS5hY3Rpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5RWZmZWN0cyB7XHJcblxyXG4gIGdldEFjdGl2aXR5JCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcbiAgICBvZlR5cGUoQWN0aXZpdHlBY3Rpb25zLkdldEFjdGl2aXR5QWN0aW9uKSxcclxuICAgIHRhcCgoYWN0aW9uKSA9PiBjb25zb2xlLmxvZygnMDAwMCcsIHsgYWN0aW9uIH0pKSxcclxuICAgIGV4aGF1c3RNYXAoXyA9PiB0aGlzLkFkbWluU2VydmljZS5nZXRBY3Rpdml0eSQoKS5waXBlKFxyXG4gICAgICBtYXAoQWN0aXZpdHkgPT4gQWN0aXZpdHlBY3Rpb25zLkdldEFjdGl2aXR5U3VjY2Vzc0FjdGlvbih7IEFjdGl2aXR5IH0pKSxcclxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihBY3Rpdml0eUFjdGlvbnMuR2V0QWN0aXZpdHlGYWlsdXJlQWN0aW9uKHsgZXJyb3IgfSkpXHJcbiAgICAgICkpLFxyXG5cclxuICAgIClcclxuICApKTtcclxuXHJcbiAgYWRkQWN0aXZpdHkkID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShcclxuICAgIG9mVHlwZShBY3Rpdml0eUFjdGlvbnMuQWRkQWN0aXZpdHlBY3Rpb24pLFxyXG4gICAgZXhoYXVzdE1hcCgoeyBhY3Rpdml0eSB9KSA9PiB0aGlzLkFkbWluU2VydmljZS5hZGROZXdBY3Rpdml0eSQoYWN0aXZpdHkpLnBpcGUoXHJcbiAgICAgIG1hcChpc0FkZGVkID0+IEFjdGl2aXR5QWN0aW9ucy5BZGRBY3Rpdml0eVN1Y2Nlc3NBY3Rpb24oeyBpc0FkZGVkIH0pKSxcclxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihBY3Rpdml0eUFjdGlvbnMuQWRkQWN0aXZpdHlGYWlsdXJlQWN0aW9uKHsgZXJyb3IgfSkpXHJcbiAgICAgICkpLFxyXG4gICAgKVxyXG4gICkpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIEFkbWluU2VydmljZTogQWRtaW5zU2VydmljZSxcclxuICApIHsgfVxyXG59Il19