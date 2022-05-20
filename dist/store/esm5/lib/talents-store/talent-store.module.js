/**
 * @fileoverview added by tsickle
 * Generated from: lib/talents-store/talent-store.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TalentsEffects } from './talents/talent.effects';
import { TalentsReducer } from './talents/talent.reducer';
var TalentStoreModule = /** @class */ (function () {
    function TalentStoreModule() {
    }
    TalentStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('talents', TalentsReducer),
                        EffectsModule.forFeature([TalentsEffects])
                    ],
                    exports: [StoreModule, EffectsModule]
                },] }
    ];
    return TalentStoreModule;
}());
export { TalentStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsZW50LXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N0b3JlLyIsInNvdXJjZXMiOlsibGliL3RhbGVudHMtc3RvcmUvdGFsZW50LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJMUQ7SUFBQTtJQVFFLENBQUM7O2dCQVJGLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ1AsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO3dCQUNqRCxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQzNDO29CQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBQyxhQUFhLENBQUM7aUJBQ3JDOztJQUVELHdCQUFDO0NBQUEsQUFSSCxJQVFHO1NBRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBUYWxlbnRzRWZmZWN0cyB9IGZyb20gJy4vdGFsZW50cy90YWxlbnQuZWZmZWN0cyc7XHJcbmltcG9ydCB7IFRhbGVudHNSZWR1Y2VyIH0gZnJvbSAnLi90YWxlbnRzL3RhbGVudC5yZWR1Y2VyJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgndGFsZW50cycsIFRhbGVudHNSZWR1Y2VyKSxcclxuICAgICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtUYWxlbnRzRWZmZWN0c10pXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1N0b3JlTW9kdWxlLEVmZmVjdHNNb2R1bGVdXHJcbiAgfSlcclxuICBleHBvcnQgY2xhc3MgVGFsZW50U3RvcmVNb2R1bGUgIHtcclxuICB9XHJcblxyXG4iXX0=