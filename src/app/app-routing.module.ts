import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', loadChildren:'src/app/login/login.module#LoginModule'},
    {path:'Admin', loadChildren:'src/app/pages/admin-page/admin-page.module#AdminPageModule'},
    {path:'Teacher', loadChildren:'src/app/pages/teacher-page/teacher-page.module#TeacherPageModule'},
    {path:'Student', loadChildren:'src/app/pages/student-page/student/student.module#StudentModule'},
    {path:'**', redirectTo:'404'}
]


@NgModule({
    
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  