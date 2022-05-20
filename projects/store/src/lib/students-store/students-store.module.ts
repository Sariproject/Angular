import { NgModule} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ActivityEffects } from './activity/activity.effects';
import { ActivityReducer } from './activity/activity.reducer';



@NgModule({
    imports: [
      StoreModule.forFeature('Activity', ActivityReducer),
      EffectsModule.forFeature([ActivityEffects])
    ],
    exports: [StoreModule,EffectsModule]
  })
  export class ActivityStoreModule  {
  }

