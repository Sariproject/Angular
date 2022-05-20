import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StudentUpdateComponent } from './student-update/student-update.component'
import { UpdatesComponent } from './updates.component'
import { YearUpdateComponent } from './year-update/year-update.component'

const routes: Routes = [
    {path:'', component:UpdatesComponent,pathMatch:'full',
    children:[
        {path:'year', component:YearUpdateComponent},
        {path:'students', component:StudentUpdateComponent}
    ]},  
]

@NgModule({   
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class UpdateRoutingModule { }
  