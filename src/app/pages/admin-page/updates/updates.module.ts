import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatesComponent } from './updates.component';
import { UpdateRoutingModule } from './updates.routing.moudel';
import { YearUpdateModule } from './year-update/year-update.module';
import { StudentUpdateModule } from './student-update/student-update.module';
import { AngularMaterialModule } from 'src/app/material.module';
import { PhTabsModule } from 'projects/design/src/lib/ph-tabs/ph-tabs.module';
import { WritingToSoftwareModule } from './year-update/writing-to-software/writing-to-software.module';
import { WritingToSoftwareTalentModule } from './year-update/writing-to-software-talent/writing-to-software-talent.module';


@NgModule({
  declarations: [UpdatesComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    YearUpdateModule,
    StudentUpdateModule,
    PhTabsModule,
    AngularMaterialModule,
    WritingToSoftwareModule,
    WritingToSoftwareTalentModule,
  ],
  exports:[UpdatesComponent]
})
export class UpdatesModule { }
