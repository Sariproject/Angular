/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.effects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AdminsService } from 'api';
import { of } from 'rxjs';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { TalentsActions } from './talent.actions';
export class TalentsEffects {
    /**
     * @param {?} actions$
     * @param {?} AdminService
     */
    constructor(actions$, AdminService) {
        this.actions$ = actions$;
        this.AdminService = AdminService;
        this.getTalents$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(TalentsActions.GetTalentsAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => console.log('ZZZZZZZZZZZZZZZZZZ', { action }))), exhaustMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.AdminService.getTalents$().pipe(map((/**
         * @param {?} talents
         * @return {?}
         */
        talents => TalentsActions.GetTalentsSuccessAction({ talents }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(TalentsActions.GetTalentsFailureAction({ error }))))))))));
        this.addTalent$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(TalentsActions.AddTalentsAction), exhaustMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ talent }) => this.AdminService.addNewTalent$(talent).pipe(map((/**
         * @param {?} isAdded
         * @return {?}
         */
        isAdded => TalentsActions.AddTalentsSuccessAction({ isAdded }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(TalentsActions.AddTalentsFailureAction({ error }))))))))));
    }
}
TalentsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TalentsEffects.ctorParameters = () => [
    { type: Actions },
    { type: AdminsService }
];
if (false) {
    /** @type {?} */
    TalentsEffects.prototype.getTalents$;
    /** @type {?} */
    TalentsEffects.prototype.addTalent$;
    /**
     * @type {?}
     * @private
     */
    TalentsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    TalentsEffects.prototype.AdminService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsZW50LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdG9yZS8iLCJzb3VyY2VzIjpbImxpYi90YWxlbnRzLXN0b3JlL3RhbGVudHMvdGFsZW50LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFDLE1BQU0sS0FBSyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFVLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFzQnpCLFlBQ1UsUUFBaUIsRUFDakIsWUFBMkI7UUFEM0IsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQXRCckMsZ0JBQVcsR0FBRyxZQUFZOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDakQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN2QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRSxDQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEVBQ3pELFVBQVU7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUNqRCxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQ25FLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hFLENBQUMsRUFFTCxDQUNKLEVBQUMsQ0FBQztRQUVILGVBQVUsR0FBRyxZQUFZOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN2QyxVQUFVOzs7O1FBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxFQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3BFLEdBQUc7Ozs7UUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsRUFDcEUsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEUsQ0FBQyxFQUNMLENBQ0QsRUFBQyxDQUFDO0lBS0csQ0FBQzs7O1lBMUJOLFVBQVU7Ozs7WUFORixPQUFPO1lBQ1AsYUFBYTs7OztJQVFwQixxQ0FTQzs7SUFFSCxvQ0FPRzs7Ozs7SUFHQyxrQ0FBeUI7Ozs7O0lBQ3pCLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBBZG1pbnNTZXJ2aWNlfSBmcm9tICdhcGknO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCwgZXhoYXVzdE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBUYWxlbnRzQWN0aW9ucyB9IGZyb20gJy4vdGFsZW50LmFjdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFsZW50c0VmZmVjdHMge1xyXG5cclxuICBnZXRUYWxlbnRzJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcbiAgICBvZlR5cGUoVGFsZW50c0FjdGlvbnMuR2V0VGFsZW50c0FjdGlvbiksXHJcbiAgICB0YXAoKGFjdGlvbik9PmNvbnNvbGUubG9nKCdaWlpaWlpaWlpaWlpaWlpaWlonLHthY3Rpb259KSksXHJcbiAgICBleGhhdXN0TWFwKCBfID0+IHRoaXMuQWRtaW5TZXJ2aWNlLmdldFRhbGVudHMkKCkucGlwZShcclxuICAgICAgICBtYXAodGFsZW50cyA9PiBUYWxlbnRzQWN0aW9ucy5HZXRUYWxlbnRzU3VjY2Vzc0FjdGlvbih7IHRhbGVudHMgfSkpLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YoVGFsZW50c0FjdGlvbnMuR2V0VGFsZW50c0ZhaWx1cmVBY3Rpb24oeyBlcnJvciB9KSlcclxuICAgICAgICApKSxcclxuXHJcbiAgICApXHJcbikpO1xyXG5cclxuYWRkVGFsZW50JCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcbiAgb2ZUeXBlKFRhbGVudHNBY3Rpb25zLkFkZFRhbGVudHNBY3Rpb24pLFxyXG4gIGV4aGF1c3RNYXAoICh7dGFsZW50fSkgID0+IHRoaXMuQWRtaW5TZXJ2aWNlLmFkZE5ld1RhbGVudCQodGFsZW50KS5waXBlKCAgICAgICAgICAgICAgICAgICBcclxuICAgICBtYXAoIGlzQWRkZWQgPT4gVGFsZW50c0FjdGlvbnMuQWRkVGFsZW50c1N1Y2Nlc3NBY3Rpb24oeyBpc0FkZGVkIH0pKSxcclxuICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKFRhbGVudHNBY3Rpb25zLkFkZFRhbGVudHNGYWlsdXJlQWN0aW9uKHsgZXJyb3IgfSkpXHJcbiAgICAgKSksXHJcbiApXHJcbikpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIEFkbWluU2VydmljZTogQWRtaW5zU2VydmljZSxcclxuICApIHsgfVxyXG59Il19