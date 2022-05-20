import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhTabsComponent } from './ph-tabs.component';
import { TabViewModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    TabViewModule
  ],
  declarations: [PhTabsComponent],
  exports: [PhTabsComponent],
})
export class PhTabsModule { }
