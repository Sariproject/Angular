import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearUpdateComponent } from './year-update.component';
import { RouterModule } from '@angular/router';
import { WritingToSoftwareComponent } from './writing-to-software/writing-to-software.component';
import { WritingToSoftwareModule } from './writing-to-software/writing-to-software.module';
import { WritingToSoftwareTalentComponent } from './writing-to-software-talent/writing-to-software-talent.component';
import { WritingToSoftwareTalentModule } from './writing-to-software-talent/writing-to-software-talent.module';
import { PhDialogModule } from 'projects/design/src/public_api';
import { AddNewClassComponent } from './add-new-class/add-new-class.component';
import { AngularMaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [YearUpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:YearUpdateComponent}
    ]),
    WritingToSoftwareModule,
    WritingToSoftwareTalentModule,
    AngularMaterialModule
  ],
  exports:[YearUpdateComponent]
})
export class YearUpdateModule { }
