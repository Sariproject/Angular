import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionsComponent } from './additions.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/material.module';
import { AddNewClassModule } from '../updates/year-update/add-new-class/add-new-class.module';
import { PhDialogModule } from 'projects/design/src/lib/ph-dialog/ph-dialog.module';
import { StudentModule } from '../../student-page/student/student.module';
import { NewTalentComponent } from './new-talent/new-talent.component';
import { NewTalentModule } from './new-Talent/new-talent.module';
import { TalentStoreModule } from 'store';

import { BSaveModule } from 'src/app/openDialog/b-save/b-save.module';
import { SuccessfulModule } from 'src/app/openDialog/successful/successful.module';


@NgModule({
  declarations: [AdditionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddNewClassModule,
    PhDialogModule,
    NewTalentModule,
    SuccessfulModule,
    AngularMaterialModule,
    BSaveModule,
    RouterModule.forChild([
      {path:'', component:AdditionsComponent, pathMatch:'full'}
    ])
  ],
  exports:[AdditionsComponent]
})
export class AdditionsModule { }
