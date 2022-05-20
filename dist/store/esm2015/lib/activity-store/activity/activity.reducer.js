/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity/activity.reducer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createReducer, on } from '@ngrx/store';
import { ActivityActions } from './activity.actions';
import { ActivityState } from './activity.state';
const ɵ0 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { Activity }) => (Object.assign({}, state, { Activity })), ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { isAdded }) => (Object.assign({}, state, { isAdded }));
/** @type {?} */
const reducer = createReducer(new ActivityState(), on(ActivityActions.GetActivitySuccessAction, (ɵ0)), on(ActivityActions.AddActivitySuccessAction, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function ActivityReducer(state, action) {
    return reducer(state, action);
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N0b3JlLyIsInNvdXJjZXMiOlsibGliL2FjdGl2aXR5LXN0b3JlL2FjdGl2aXR5L2FjdGl2aXR5LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFJQyxDQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxtQkFBTSxLQUFLLElBQUUsUUFBUSxJQUFHOzs7OztBQUNqRCxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxtQkFBTSxLQUFLLElBQUUsT0FBTyxJQUFHOztNQUgxRixPQUFPLEdBQUcsYUFBYSxDQUN6QixJQUFJLGFBQWEsRUFBRSxFQUNuQixFQUFFLENBQUMsZUFBZSxDQUFDLHdCQUF3QixPQUFvRCxFQUMvRixFQUFFLENBQUMsZUFBZSxDQUFDLHdCQUF3QixPQUFrRCxDQUM5Rjs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFnQyxFQUFFLE1BQWM7SUFDOUUsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIGNyZWF0ZVJlZHVjZXIsIG9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUFjdGlvbnMgfSBmcm9tICcuL2FjdGl2aXR5LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eVN0YXRlfSBmcm9tICcuL2FjdGl2aXR5LnN0YXRlJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKFxyXG4gICAgbmV3IEFjdGl2aXR5U3RhdGUoKSxcclxuICAgIG9uKEFjdGl2aXR5QWN0aW9ucy5HZXRBY3Rpdml0eVN1Y2Nlc3NBY3Rpb24sIChzdGF0ZSwgeyBBY3Rpdml0eSB9KSA9PiAoeyAuLi5zdGF0ZSwgQWN0aXZpdHkgfSkpLFxyXG4gICAgb24oQWN0aXZpdHlBY3Rpb25zLkFkZEFjdGl2aXR5U3VjY2Vzc0FjdGlvbiwgKHN0YXRlLCB7IGlzQWRkZWQgfSkgPT4gKHsgLi4uc3RhdGUsIGlzQWRkZWQgfSkpLFxyXG4gIClcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIEFjdGl2aXR5UmVkdWNlcihzdGF0ZTogQWN0aXZpdHlTdGF0ZSB8IHVuZGVmaW5lZCwgYWN0aW9uOiBBY3Rpb24pIHtcclxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gIH1cclxuIl19