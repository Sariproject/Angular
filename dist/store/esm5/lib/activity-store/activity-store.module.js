/**
 * @fileoverview added by tsickle
 * Generated from: lib/activity-store/activity-store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ActivityEffects } from './activity/activity.effects';
import { ActivityReducer } from './activity/activity.reducer';
var ActivityStoreModule = /** @class */ (function () {
    function ActivityStoreModule() {
    }
    ActivityStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('Activity', ActivityReducer),
                        EffectsModule.forFeature([ActivityEffects])
                    ],
                    exports: [StoreModule, EffectsModule]
                },] }
    ];
    return ActivityStoreModule;
}());
export { ActivityStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktc3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3RvcmUvIiwic291cmNlcyI6WyJsaWIvYWN0aXZpdHktc3RvcmUvYWN0aXZpdHktc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUk5RDtJQUFBO0lBUUUsQ0FBQzs7Z0JBUkYsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7d0JBQ25ELGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDNUM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFDLGFBQWEsQ0FBQztpQkFDckM7O0lBRUQsMEJBQUM7Q0FBQSxBQVJILElBUUc7U0FEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEFjdGl2aXR5RWZmZWN0cyB9IGZyb20gJy4vYWN0aXZpdHkvYWN0aXZpdHkuZWZmZWN0cyc7XHJcbmltcG9ydCB7IEFjdGl2aXR5UmVkdWNlciB9IGZyb20gJy4vYWN0aXZpdHkvYWN0aXZpdHkucmVkdWNlcic7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ0FjdGl2aXR5JywgQWN0aXZpdHlSZWR1Y2VyKSxcclxuICAgICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtBY3Rpdml0eUVmZmVjdHNdKVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtTdG9yZU1vZHVsZSxFZmZlY3RzTW9kdWxlXVxyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIEFjdGl2aXR5U3RvcmVNb2R1bGUgIHtcclxuICB9XHJcblxyXG4iXX0=