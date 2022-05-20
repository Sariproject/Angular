import { NgModule } from '@angular/core';
import { DesignComponent } from './design.component';
import { FilterArrayPipe } from './pipe/filter-array.pipe';
import { CountFilterArrayPipe } from './pipe/count-filter-array.pipe';



@NgModule({
  declarations: [DesignComponent, FilterArrayPipe, CountFilterArrayPipe],
  imports: [
  ],
  exports: [DesignComponent]
})
export class DesignModule { }
