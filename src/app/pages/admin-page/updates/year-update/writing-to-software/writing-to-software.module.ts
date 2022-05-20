import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritingToSoftwareComponent } from './writing-to-software.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddNewClassModule } from '../add-new-class/add-new-class.module';
import { AngularMaterialModule } from 'src/app/material.module';
import {  DialogModule, PhDialogModule } from 'projects/design/src/public_api';



@NgModule({
  declarations: [WritingToSoftwareComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddNewClassModule,
    PhDialogModule,
    DialogModule,
    AngularMaterialModule
  ],exports:[WritingToSoftwareComponent]
})
export class WritingToSoftwareModule { }
