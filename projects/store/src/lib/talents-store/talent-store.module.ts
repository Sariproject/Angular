import { NgModule} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TalentsEffects } from './talents/talent.effects';
import { TalentsReducer } from './talents/talent.reducer';



@NgModule({
    imports: [
      StoreModule.forFeature('talents', TalentsReducer),
      EffectsModule.forFeature([TalentsEffects])
    ],
    exports: [StoreModule,EffectsModule]
  })
  export class TalentStoreModule  {
  }

