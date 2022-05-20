import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessfulComponent } from '../successful/successful.component';
import { AngularMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [SuccessfulComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[SuccessfulComponent]
})
export class SuccessfulModule { }
