import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewClassComponent } from './add-new-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [AddNewClassComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularMaterialModule
  ],
  exports:[AddNewClassComponent]
})
export class AddNewClassModule { }
