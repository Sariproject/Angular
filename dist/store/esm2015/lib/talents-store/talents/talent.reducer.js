/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talents/talent.reducer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createReducer, on } from '@ngrx/store';
import { TalentsActions } from './talent.actions';
import { TalentsState } from './talent.state';
const ɵ0 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { talents }) => (Object.assign({}, state, { talents })), ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { isAdded }) => (Object.assign({}, state, { isAdded }));
/** @type {?} */
const reducer = createReducer(new TalentsState(), on(TalentsActions.GetTalentsSuccessAction, (ɵ0)), on(TalentsActions.AddTalentsSuccessAction, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function TalentsReducer(state, action) {
    return reducer(state, action);
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsZW50LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdG9yZS8iLCJzb3VyY2VzIjpbImxpYi90YWxlbnRzLXN0b3JlL3RhbGVudHMvdGFsZW50LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFJQyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxtQkFBTSxLQUFLLElBQUUsT0FBTyxJQUFHOzs7OztBQUMvQyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUUsQ0FBQyxtQkFBTSxLQUFLLElBQUUsT0FBTyxJQUFHOztNQUh2RixPQUFPLEdBQUcsYUFBYSxDQUN6QixJQUFJLFlBQVksRUFBRSxFQUNsQixFQUFFLENBQUMsY0FBYyxDQUFDLHVCQUF1QixPQUFrRCxFQUMzRixFQUFFLENBQUMsY0FBYyxDQUFDLHVCQUF1QixPQUFpRCxDQUMzRjs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUErQixFQUFFLE1BQWM7SUFDNUUsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIGNyZWF0ZVJlZHVjZXIsIG9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBUYWxlbnRzQWN0aW9ucyB9IGZyb20gJy4vdGFsZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUYWxlbnRzU3RhdGUgfSBmcm9tICcuL3RhbGVudC5zdGF0ZSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihcclxuICAgIG5ldyBUYWxlbnRzU3RhdGUoKSxcclxuICAgIG9uKFRhbGVudHNBY3Rpb25zLkdldFRhbGVudHNTdWNjZXNzQWN0aW9uLCAoc3RhdGUsIHsgdGFsZW50cyB9KSA9PiAoeyAuLi5zdGF0ZSwgdGFsZW50cyB9KSksXHJcbiAgICBvbihUYWxlbnRzQWN0aW9ucy5BZGRUYWxlbnRzU3VjY2Vzc0FjdGlvbiwgKHN0YXRlLCB7IGlzQWRkZWR9KSA9PiAoeyAuLi5zdGF0ZSwgaXNBZGRlZCB9KSksXHJcbiAgKVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gVGFsZW50c1JlZHVjZXIoc3RhdGU6IFRhbGVudHNTdGF0ZSB8IHVuZGVmaW5lZCwgYWN0aW9uOiBBY3Rpb24pIHtcclxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gIH1cclxuIl19