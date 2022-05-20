import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BSaveComponent } from '../b-save/b-save.component';
import { AngularMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [BSaveComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[BSaveComponent]
})
export class BSaveModule { }
