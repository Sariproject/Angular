import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { RouterModule } from '@angular/router';
import { TableUpdateModule } from '../../teacher-page/table-update/table-update.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/primeng';
import { AngularMaterialModule } from 'src/app/material.module';
import { DialogModule, PhDialogModule } from 'projects/design/src/public_api';
import { SearchModule } from './search/search.module';
import { FilterArrayPipe } from 'projects/design/src/lib/pipe/filter-array.pipe';
import { StudentModule } from '../../student-page/student/student.module';
import { TableModule } from 'primeng/components/table/table';
import { CountFilterArrayPipe } from 'projects/design/src/lib/pipe/count-filter-array.pipe';



@NgModule({
  declarations: [InformationComponent,FilterArrayPipe,CountFilterArrayPipe],
  imports: [
    CommonModule,
    StudentModule,
    RouterModule.forChild([
      {path:'', component:InformationComponent, pathMatch:'full'}
    ]),
    TableUpdateModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ContextMenuModule,
    PhDialogModule,
    SearchModule,
    TableModule,
    DialogModule
  ],
  exports:[InformationComponent]
})
export class InformationModule { }
