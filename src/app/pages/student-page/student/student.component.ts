import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'api';
import { UpdateComponent } from 'src/app/openDialog/update/update.component';
import { NavigationService } from 'src/app/services/navigation.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentDetails = []
  id = ''
  @Output() clickSave: EventEmitter<object> = new EventEmitter();

  studentId
  tasks = []
  talents = []
  flagVisity = false
  Years = []
  tasksYear = []
  save=[]
  header: string;
  TasksDelet: any;
  TaskChoose={}
  @ViewChild('Update') UpdateTmpl: UpdateComponent;
  constructor(private studentService: StudentsService, private router: Router,public nav: NavigationService) { }


  ngOnInit() {
    this.id = localStorage.getItem('password')
   
    if (this.id != '987654321') {
      if (this.studentService.CurrentStudent == undefined) {
        this.studentService.getStudentDetails$(this.id).subscribe(
          ans => {
            this.studentDetails = ans[0], console.log(ans, "sd");
          }
        )
      }
      this.studentDetails = this.studentService.CurrentStudent

      this.studentService.getStudentTasks$(this.id).subscribe(
        ans => {
          this.tasks = ans; console.log(ans);
        }
      )

      this.studentService.getStudentTalent$(this.id).subscribe(
        ans => {
          this.talents = ans; console.log(ans);
        }
      )
    }
  }

  logout() {
    this.router.navigate(['/login'])

  }
  Beack() {
    if (this.flagVisity == true) {
      this.clickSave.emit()
    }
  }
  getForAdmin(i) {

    this.flagVisity = true
    this.studentService.getYears$(i).subscribe(
      ans => {
        console.log(ans.reverse());
        
        this.Years = ans

      }
    )
    this.studentService.getStudentbyStudentId$(i).subscribe(
      ans => {
        this.studentDetails = ans[0][0];
        this.talents = ans[1];
        this.tasks = ans[2]
        this.filterArray()
      }
    )
  }
  filterArray() {
    this.tasksYear = []
    this.Years.forEach(y => {
      let r = []
      if (this.tasks != null) {
        this.tasks.forEach(i => {
          if (i.year == y.year) {
            r.push(i)
          }
        })
      }

      this.tasksYear.push(r)
    })
    
  }
  openYear(r, y) {

  
  
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(y).style.display = "block";
    tablinks[r].className += " active";
    
  }
  openDelet(Tasks){
    this.TasksDelet=Tasks
    this.save=[]
              this.header = 'אזהרה'
              this.nav.showbeforSaveDialog = true;
    console.log(Tasks);
    
  }
  
  openUpDate(Tasks){
    console.log(Tasks,"jkkkk");
    this.TaskChoose=Tasks
    console.log(this.TaskChoose);
    
    this.UpdateTmpl.Form(Tasks)
    
    this.header = 'עדכון'
    this.nav.showUpdataDialog = true;
  }
  Delet(s){
    this.nav.showbeforSaveDialog = false;
    console.log(s);
    if(s=='Save'){
      this.studentService.deleteTasks$(this.TasksDelet.taskId)
      .subscribe(ans=>{
        if( ans [0] == 1){
        this.nav.showSuccessDialog=true
        }
        console.log(ans[0])})
    }
  
  }
  upDate(Tasks){
    console.log(Tasks);
    
  }
 onHide(){}
 onShow(){}
 closeModelSuccess(){
  this.nav.showSuccessDialog=false
 }
 closeModelUpdate(){
  this.nav.showUpdataDialog =false
 }
}
