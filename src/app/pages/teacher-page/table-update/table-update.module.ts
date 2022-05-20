import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUpdateComponent } from './table-update.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableUpdateComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path:'', component:TableUpdateComponent, pathMatch:'full'}
    ])
  ],
  exports:[TableUpdateComponent]
})
export class TableUpdateModule { }
