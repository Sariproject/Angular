import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTalentComponent } from './new-talent.component';
import { AngularMaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewTalentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports:[NewTalentComponent]
})
export class NewTalentModule { }
