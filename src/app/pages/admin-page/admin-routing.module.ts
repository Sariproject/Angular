import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdditionsComponent } from './additions/additions.component'
import { AdminPageComponent } from './admin-page.component'
import { InformationComponent } from './information/information.component'
import { UpdatesComponent } from './updates/updates.component'

const routes: Routes = [
    {path:'', component:AdminPageComponent,
    // children:[
    //     {path:'', component:MenuComponent},
    //     {path:'information', component:InformationComponent},
    //     {path:'updates', component:UpdatesComponent},
    //     {path:'additions', component:AdditionsComponent}
    // ]
},  
]

@NgModule({   
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule { }
  