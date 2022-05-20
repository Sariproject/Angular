import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritingToSoftwareTalentComponent } from './writing-to-software-talent.component';
import { AngularMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [WritingToSoftwareTalentComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[WritingToSoftwareTalentComponent]
})
export class WritingToSoftwareTalentModule { }
