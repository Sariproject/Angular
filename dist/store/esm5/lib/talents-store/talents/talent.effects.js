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
var TalentsEffects = /** @class */ (function () {
    function TalentsEffects(actions$, AdminService) {
        var _this = this;
        this.actions$ = actions$;
        this.AdminService = AdminService;
        this.getTalents$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(TalentsActions.GetTalentsAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return console.log('ZZZZZZZZZZZZZZZZZZ', { action: action }); })), exhaustMap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.AdminService.getTalents$().pipe(map((/**
         * @param {?} talents
         * @return {?}
         */
        function (talents) { return TalentsActions.GetTalentsSuccessAction({ talents: talents }); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(TalentsActions.GetTalentsFailureAction({ error: error })); }))); }))); }));
        this.addTalent$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(TalentsActions.AddTalentsAction), exhaustMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var talent = _a.talent;
            return _this.AdminService.addNewTalent$(talent).pipe(map((/**
             * @param {?} isAdded
             * @return {?}
             */
            function (isAdded) { return TalentsActions.AddTalentsSuccessAction({ isAdded: isAdded }); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(TalentsActions.AddTalentsFailureAction({ error: error })); })));
        }))); }));
    }
    TalentsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TalentsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AdminsService }
    ]; };
    return TalentsEffects;
}());
export { TalentsEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsZW50LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdG9yZS8iLCJzb3VyY2VzIjpbImxpYi90YWxlbnRzLXN0b3JlL3RhbGVudHMvdGFsZW50LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFDLE1BQU0sS0FBSyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFVLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDtJQXVCRSx3QkFDVSxRQUFpQixFQUNqQixZQUEyQjtRQUZyQyxpQkFHSztRQUZLLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWU7UUF0QnJDLGdCQUFXLEdBQUcsWUFBWTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNqRCxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQ3ZDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQU0sSUFBRyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUMsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDLEVBQTFDLENBQTBDLEVBQUMsRUFDekQsVUFBVTs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ2pELEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBbkQsQ0FBbUQsRUFBQyxFQUNuRSxVQUFVOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQXJELENBQXFELEVBQ3hFLENBQUMsRUFIVyxDQUdYLEVBRUwsQ0FDSixFQVRrQyxDQVNsQyxFQUFDLENBQUM7UUFFSCxlQUFVLEdBQUcsWUFBWTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoRCxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQ3ZDLFVBQVU7Ozs7UUFBRSxVQUFDLEVBQVE7Z0JBQVAsa0JBQU07WUFBTyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDcEUsR0FBRzs7OztZQUFFLFVBQUEsT0FBTyxJQUFJLE9BQUEsY0FBYyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxFQUFuRCxDQUFtRCxFQUFDLEVBQ3BFLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUMsRUFBckQsQ0FBcUQsRUFDeEUsQ0FBQztRQUhzQixDQUd0QixFQUNMLENBQ0QsRUFQK0IsQ0FPL0IsRUFBQyxDQUFDO0lBS0csQ0FBQzs7Z0JBMUJOLFVBQVU7Ozs7Z0JBTkYsT0FBTztnQkFDUCxhQUFhOztJQWdDdEIscUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSxjQUFjOzs7SUFFekIscUNBU0M7O0lBRUgsb0NBT0c7Ozs7O0lBR0Msa0NBQXlCOzs7OztJQUN6QixzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgQWRtaW5zU2VydmljZX0gZnJvbSAnYXBpJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAsIGV4aGF1c3RNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVGFsZW50c0FjdGlvbnMgfSBmcm9tICcuL3RhbGVudC5hY3Rpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhbGVudHNFZmZlY3RzIHtcclxuXHJcbiAgZ2V0VGFsZW50cyQgPSBjcmVhdGVFZmZlY3QoKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gICAgb2ZUeXBlKFRhbGVudHNBY3Rpb25zLkdldFRhbGVudHNBY3Rpb24pLFxyXG4gICAgdGFwKChhY3Rpb24pPT5jb25zb2xlLmxvZygnWlpaWlpaWlpaWlpaWlpaWlpaJyx7YWN0aW9ufSkpLFxyXG4gICAgZXhoYXVzdE1hcCggXyA9PiB0aGlzLkFkbWluU2VydmljZS5nZXRUYWxlbnRzJCgpLnBpcGUoXHJcbiAgICAgICAgbWFwKHRhbGVudHMgPT4gVGFsZW50c0FjdGlvbnMuR2V0VGFsZW50c1N1Y2Nlc3NBY3Rpb24oeyB0YWxlbnRzIH0pKSxcclxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKFRhbGVudHNBY3Rpb25zLkdldFRhbGVudHNGYWlsdXJlQWN0aW9uKHsgZXJyb3IgfSkpXHJcbiAgICAgICAgKSksXHJcblxyXG4gICAgKVxyXG4pKTtcclxuXHJcbmFkZFRhbGVudCQgPSBjcmVhdGVFZmZlY3QoKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gIG9mVHlwZShUYWxlbnRzQWN0aW9ucy5BZGRUYWxlbnRzQWN0aW9uKSxcclxuICBleGhhdXN0TWFwKCAoe3RhbGVudH0pICA9PiB0aGlzLkFkbWluU2VydmljZS5hZGROZXdUYWxlbnQkKHRhbGVudCkucGlwZSggICAgICAgICAgICAgICAgICAgXHJcbiAgICAgbWFwKCBpc0FkZGVkID0+IFRhbGVudHNBY3Rpb25zLkFkZFRhbGVudHNTdWNjZXNzQWN0aW9uKHsgaXNBZGRlZCB9KSksXHJcbiAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihUYWxlbnRzQWN0aW9ucy5BZGRUYWxlbnRzRmFpbHVyZUFjdGlvbih7IGVycm9yIH0pKVxyXG4gICAgICkpLFxyXG4gKVxyXG4pKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBBZG1pblNlcnZpY2U6IEFkbWluc1NlcnZpY2UsXHJcbiAgKSB7IH1cclxufSJdfQ==