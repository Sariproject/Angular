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
export class TalentStoreModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsZW50LXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N0b3JlLyIsInNvdXJjZXMiOlsibGliL3RhbGVudHMtc3RvcmUvdGFsZW50LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFXeEQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBUC9CLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO29CQUNqRCxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQzNDO2dCQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBQyxhQUFhLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFRhbGVudHNFZmZlY3RzIH0gZnJvbSAnLi90YWxlbnRzL3RhbGVudC5lZmZlY3RzJztcclxuaW1wb3J0IHsgVGFsZW50c1JlZHVjZXIgfSBmcm9tICcuL3RhbGVudHMvdGFsZW50LnJlZHVjZXInO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCd0YWxlbnRzJywgVGFsZW50c1JlZHVjZXIpLFxyXG4gICAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1RhbGVudHNFZmZlY3RzXSlcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbU3RvcmVNb2R1bGUsRWZmZWN0c01vZHVsZV1cclxuICB9KVxyXG4gIGV4cG9ydCBjbGFzcyBUYWxlbnRTdG9yZU1vZHVsZSAge1xyXG4gIH1cclxuXHJcbiJdfQ==