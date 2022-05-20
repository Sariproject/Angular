import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { InformationModule } from './information/information.module';
import { UpdatesModule } from './updates/updates.module';
import { AdditionsModule } from './additions/additions.module';
import { PhTabsModule } from 'projects/design/src/public_api';
import { ActivityStoreModule, TalentStoreModule } from 'store';





@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InformationModule,
    UpdatesModule,
    AdditionsModule,
    PhTabsModule,
    TalentStoreModule,
    ActivityStoreModule
  ],
  exports:[AdminPageComponent]
})
export class AdminPageModule { }
