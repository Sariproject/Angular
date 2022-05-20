import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:TableViewComponent, pathMatch:'full'}
    ])
  ],
  exports:[TableViewComponent]
})
export class TableViewModule { }
