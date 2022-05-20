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
export class ActivityEffects {
    /**
     * @param {?} actions$
     * @param {?} AdminService
     */
    constructor(actions$, AdminService) {
        this.actions$ = actions$;
        this.AdminService = AdminService;
        this.getActivity$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(ActivityActions.GetActivityAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => console.log('0000', { action }))), exhaustMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.AdminService.getActivity$().pipe(map((/**
         * @param {?} Activity
         * @return {?}
         */
        Activity => ActivityActions.GetActivitySuccessAction({ Activity }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(ActivityActions.GetActivityFailureAction({ error }))))))))));
        this.addActivity$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(ActivityActions.AddActivityAction), exhaustMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ activity }) => this.AdminService.addNewActivity$(activity).pipe(map((/**
         * @param {?} isAdded
         * @return {?}
         */
        isAdded => ActivityActions.AddActivitySuccessAction({ isAdded }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(ActivityActions.AddActivityFailureAction({ error }))))))))));
    }
}
ActivityEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ActivityEffects.ctorParameters = () => [
    { type: Actions },
    { type: AdminsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N0b3JlLyIsInNvdXJjZXMiOlsibGliL2FjdGl2aXR5LXN0b3JlL2FjdGl2aXR5L2FjdGl2aXR5LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFVLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFzQjFCLFlBQ1UsUUFBaUIsRUFDakIsWUFBMkI7UUFEM0IsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQXRCckMsaUJBQVksR0FBRyxZQUFZOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUN6QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxFQUNoRCxVQUFVOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDbkQsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBQyxFQUN2RSxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUMxRSxDQUFDLEVBRUgsQ0FDRixFQUFDLENBQUM7UUFFSCxpQkFBWSxHQUFHLFlBQVk7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRCxNQUFNLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEVBQ3pDLFVBQVU7Ozs7UUFBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDM0UsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUNyRSxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUMxRSxDQUFDLEVBQ0gsQ0FDRixFQUFDLENBQUM7SUFLQyxDQUFDOzs7WUExQk4sVUFBVTs7OztZQU5GLE9BQU87WUFDUCxhQUFhOzs7O0lBUXBCLHVDQVNHOztJQUVILHVDQU9HOzs7OztJQUdELG1DQUF5Qjs7Ozs7SUFDekIsdUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IEFkbWluc1NlcnZpY2UgfSBmcm9tICdhcGknO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCwgZXhoYXVzdE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUFjdGlvbnMgfSBmcm9tICcuL2FjdGl2aXR5LmFjdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWN0aXZpdHlFZmZlY3RzIHtcclxuXHJcbiAgZ2V0QWN0aXZpdHkkID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShcclxuICAgIG9mVHlwZShBY3Rpdml0eUFjdGlvbnMuR2V0QWN0aXZpdHlBY3Rpb24pLFxyXG4gICAgdGFwKChhY3Rpb24pID0+IGNvbnNvbGUubG9nKCcwMDAwJywgeyBhY3Rpb24gfSkpLFxyXG4gICAgZXhoYXVzdE1hcChfID0+IHRoaXMuQWRtaW5TZXJ2aWNlLmdldEFjdGl2aXR5JCgpLnBpcGUoXHJcbiAgICAgIG1hcChBY3Rpdml0eSA9PiBBY3Rpdml0eUFjdGlvbnMuR2V0QWN0aXZpdHlTdWNjZXNzQWN0aW9uKHsgQWN0aXZpdHkgfSkpLFxyXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKEFjdGl2aXR5QWN0aW9ucy5HZXRBY3Rpdml0eUZhaWx1cmVBY3Rpb24oeyBlcnJvciB9KSlcclxuICAgICAgKSksXHJcblxyXG4gICAgKVxyXG4gICkpO1xyXG5cclxuICBhZGRBY3Rpdml0eSQgPSBjcmVhdGVFZmZlY3QoKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gICAgb2ZUeXBlKEFjdGl2aXR5QWN0aW9ucy5BZGRBY3Rpdml0eUFjdGlvbiksXHJcbiAgICBleGhhdXN0TWFwKCh7IGFjdGl2aXR5IH0pID0+IHRoaXMuQWRtaW5TZXJ2aWNlLmFkZE5ld0FjdGl2aXR5JChhY3Rpdml0eSkucGlwZShcclxuICAgICAgbWFwKGlzQWRkZWQgPT4gQWN0aXZpdHlBY3Rpb25zLkFkZEFjdGl2aXR5U3VjY2Vzc0FjdGlvbih7IGlzQWRkZWQgfSkpLFxyXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKEFjdGl2aXR5QWN0aW9ucy5BZGRBY3Rpdml0eUZhaWx1cmVBY3Rpb24oeyBlcnJvciB9KSlcclxuICAgICAgKSksXHJcbiAgICApXHJcbiAgKSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgQWRtaW5TZXJ2aWNlOiBBZG1pbnNTZXJ2aWNlLFxyXG4gICkgeyB9XHJcbn0iXX0=