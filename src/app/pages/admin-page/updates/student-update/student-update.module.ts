import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentUpdateComponent } from './student-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTableModule } from 'projects/design/src/lib/my-table/my-table.module';
import { AngularMaterialModule } from 'src/app/material.module';




@NgModule({
  declarations: [StudentUpdateComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MyTableModule,
    AngularMaterialModule
  ],
  exports:[StudentUpdateComponent]
})
export class StudentUpdateModule { }
