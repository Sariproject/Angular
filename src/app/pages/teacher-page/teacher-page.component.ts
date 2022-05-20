import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from 'api'
import { tap } from 'rxjs/operators';

import { TeacherModel } from 'type';


@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss']
})
export class TeacherPageComponent implements OnInit {

  teacherDetails: TeacherModel
  id = ''

  constructor(private router: Router, private teacherService: TeachersService) { }

  ngOnInit() {
    this.id = localStorage.getItem('password')

    this.teacherService.getStudentsById$(this.id).pipe(
      tap(ans => console.log(ans, "student")),
      tap(ans => this.teacherService.students = ans)).subscribe()

    if (this.teacherService.CurrentTeacher == undefined) {
      this.teacherService.getTeacherDetails$(this.id).subscribe(
        ans => {
          this.teacherDetails = ans, console.log(ans),
          this.teacherService.teacherDetails=ans
        }
      )
    }
    this.teacherDetails = this.teacherService.CurrentTeacher

  }

  logout() {

    this.router.navigate(['/login'])

  }

  view(){
    this.router.navigate(['/Teacher/table-view'])
  }

  update(){
    this.router.navigate(['/Teacher/table-update'])
  }

}
