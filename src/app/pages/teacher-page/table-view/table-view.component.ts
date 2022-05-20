import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'api';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StudentModel, TeacherModel } from 'type';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  id = ''
  teacherDetails: TeacherModel
  students :StudentModel[]

  constructor(private teacherService: TeachersService) { }

  ngOnInit() {

    this.teacherDetails = this.teacherService.CurrentTeacher;

    this.id = localStorage.getItem('password')
    
    if (this.teacherService.CurrentStudents.length == 0) {

      this.teacherService.getStudentsById$(this.id).pipe(
        tap(ans => console.log(ans)),
        tap(ans => this.students = ans),
        tap(ans => this.filterStudents()),
        tap(ans => this.teacherService.students = ans)).subscribe()
    }

    this.students = this.teacherService.CurrentStudents

  }

  filterStudents() {
    let nameStudents = []
    this.students.forEach(s => {
      console.log(nameStudents.indexOf(s.name));
      if (nameStudents.indexOf(s.name) == -1) {
        nameStudents.push(s.name)
      }
      else {
        s.name = ''
        s.Class=''
      }
    })

  }
}
