import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherMenuComponent } from './teacher-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeacherMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:TeacherMenuComponent, pathMatch:'full'}
    ])
  ],
  exports:[TeacherMenuComponent]
})
export class TeacherMenuModule { }
