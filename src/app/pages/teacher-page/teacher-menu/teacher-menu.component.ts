import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from 'api';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-menu',
  templateUrl: './teacher-menu.component.html',
  styleUrls: ['./teacher-menu.component.scss']
})
export class TeacherMenuComponent implements OnInit {

  teacherDetails={}
  id=''

  constructor(private router:Router, private teacherService:TeachersService ) { }

  ngOnInit() {
    this.id=localStorage.getItem('password')
    
  }

  view(){
    this.router.navigate(['/Teacher/table-view'])
  }

  update(){
    this.router.navigate(['/Teacher/table-update'])
  }

}
