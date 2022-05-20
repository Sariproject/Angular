import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/material.module';
import { BSaveModule } from 'src/app/openDialog/b-save/b-save.module';
import { PhDialogModule } from 'projects/design/src/public_api';
import { SuccessfulModule } from 'src/app/openDialog/successful/successful.module';
import { UpdateModule } from 'src/app/openDialog/update/update.module';

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BSaveModule,
    PhDialogModule,
    SuccessfulModule,
    UpdateModule,
    UpdateModule,
    RouterModule.forChild([
      {path:'', component:StudentComponent, pathMatch:'full'}
    ])
  ],
  exports:[StudentComponent]
})
export class StudentModule { }
