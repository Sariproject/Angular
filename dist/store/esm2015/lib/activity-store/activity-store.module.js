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
export class ActivityStoreModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktc3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3RvcmUvIiwic291cmNlcyI6WyJsaWIvYWN0aXZpdHktc3RvcmUvYWN0aXZpdHktc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVc1RCxNQUFNLE9BQU8sbUJBQW1COzs7WUFQakMsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7b0JBQ25ELGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDNUM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFDLGFBQWEsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgQWN0aXZpdHlFZmZlY3RzIH0gZnJvbSAnLi9hY3Rpdml0eS9hY3Rpdml0eS5lZmZlY3RzJztcclxuaW1wb3J0IHsgQWN0aXZpdHlSZWR1Y2VyIH0gZnJvbSAnLi9hY3Rpdml0eS9hY3Rpdml0eS5yZWR1Y2VyJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnQWN0aXZpdHknLCBBY3Rpdml0eVJlZHVjZXIpLFxyXG4gICAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0FjdGl2aXR5RWZmZWN0c10pXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1N0b3JlTW9kdWxlLEVmZmVjdHNNb2R1bGVdXHJcbiAgfSlcclxuICBleHBvcnQgY2xhc3MgQWN0aXZpdHlTdG9yZU1vZHVsZSAge1xyXG4gIH1cclxuXHJcbiJdfQ==