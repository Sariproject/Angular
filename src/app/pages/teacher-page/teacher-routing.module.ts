import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TableUpdateComponent } from './table-update/table-update.component'
import { TableViewComponent } from './table-view/table-view.component'
import { TeacherMenuComponent } from './teacher-menu/teacher-menu.component'
import { TeacherPageComponent } from './teacher-page.component'

const routes: Routes = [
    {path:'', component:TeacherPageComponent,
    children:[
        {path:'table-view', component:TableViewComponent},
        {path:'table-update', component:TableUpdateComponent}
    ]},  
]

@NgModule({   
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TeacherRoutingModule { }
  