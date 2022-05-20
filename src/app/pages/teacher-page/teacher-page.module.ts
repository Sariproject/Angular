import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherPageComponent } from './teacher-page.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TableViewModule } from './table-view/table-view.module';
import { TableUpdateModule } from './table-update/table-update.module';
import { TeacherMenuModule } from './teacher-menu/teacher-menu.module';

@NgModule({
  declarations: [TeacherPageComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    TableViewModule,
    TableUpdateModule,
    TeacherMenuModule
  ],
  exports:[TeacherPageComponent]
})
export class TeacherPageModule { }
