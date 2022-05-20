
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '@angular/router';
import { AdminsService } from 'api';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { select, Store } from '@ngrx/store';
import { ActivityActions, TalentsActions, talentsSelector, ActivitySelector } from 'store';
import { delay, filter, takeWhile, tap } from 'rxjs/operators';


@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.scss']
})
export class AdditionsComponent implements OnInit {

  formTask: FormGroup
  modalWidth
  modalHeight
  Activity = []
  talents = []
  students = []
  selectedOption = ''
  flagSelect: boolean = false
  header: string;
  Save=[]

  constructor(private store: Store<any>, private adminService: AdminsService, private formBuilder: FormBuilder, public nav: NavigationService) { }



  ngOnInit() {

    this.store.dispatch(TalentsActions.GetTalentsAction())
    this.store.dispatch(ActivityActions.GetActivityAction())
    this.store.select(talentsSelector).pipe(
      tap(ans => this.talents = ans),
      tap(ans => console.log(ans, "pppppp"))

    ).subscribe();

    this.store.select(ActivitySelector).pipe(
      tap(ans => this.Activity = ans),
      tap(ans => console.log(ans, "pppppp"))

    ).subscribe();

    this.formTask = this.formBuilder.group({
      name: ['', Validators.required],
      misgeret: ['', Validators.required],
      size: ['', Validators.required],
      activity: ['', Validators.required],
      talent: ['', Validators.required],
      class: [''],
      more: ['']

    })
    console.log(this.formTask.validator);

  }

  changeText(value) {

    if (value.length == 1) {
      this.adminService.getStudentsForFilter(value).subscribe(
        ans => { this.students = ans; console.log(this.students); }

      )
    }
  }


  

  onSave(){

  
    console.log(this.formTask.status);

    console.log(this.formTask.value);

    if (this.formTask.valid) {
      console.log("---");
      this.Save=[{name:'שם' ,value: this.formTask.controls.name.value },{name:'תפקיד',value: this.formTask.controls.talent.value },{name:'פעילות' ,value: this.formTask.controls.activity.value} , {name:'קהל יעד' ,value:this.formTask.controls.misgeret.value}, {name:'גודל', value:this.formTask.controls.size.value}]
              this.header = 'אזהרה'
              this.nav.clear();
              this.nav.showbeforSaveDialog = true;
       
       console.log(this.Save);
       for (let iterator in this.Save) {
               Object.keys(iterator)
       }
       console.log();
    }
   }   
    update(i) {
      this.nav.clear();
      console.log(i);
      if(i=="Save"){
        let A, T, id
        A = this.Activity.find(a => a.nameActivity == this.formTask.controls.activity.value);

        T = this.talents.find(t => t.nameTalent == this.formTask.controls.talent.value);
        let y = ""
        y = (this.formTask.controls.name.value)
        let fullname = y.split(" ")
        this.formTask.controls.class.setValue(fullname.pop())
        this.formTask.controls.name.setValue(fullname.join(" "))
        this.students.forEach(s => {
          if (this.formTask.controls.class.value == s.Class && this.formTask.controls.name.value == s.name) {
            id = s.StudentId
          }
        });
        console.log(this.formTask.value);

        let task = {
          studentId: id,
          name: this.formTask.controls.name.value,
          class: this.formTask.controls.class.value,
          misgeret: this.formTask.controls.misgeret.value,
          size: this.formTask.controls.size.value,
          activity: A.activityId,
          talent: T.talentId,
          more: this.formTask.controls.more.value,
        }
        console.log(task);
        this.adminService.insertTaskForStudent(task).subscribe(
          (msg) => {
            console.log(msg, "vfbov");
            if (msg[0] == 1) {
              this.header = 'הצלחה'
              this.nav.clear();
              this.nav.showSuccessDialog = true;
              //this.nav.displayDialog =  this.header;
            }
          },
          (err) => { console.log(err) }
        )
      
      }
    this.formTask.reset()
  }
  changeTalent(e: Event) {
    console.log(e);



  }
  openModal(header) {
    console.log(this.talents);

    this.header = header
    this.nav.clear();
    this.nav.showNewTalentandActivityDialog = true;
    this.nav.displayDialog = header;

  }
  SaveAddtion(ev) {
    console.log(ev)
    if (ev.add != "" && ev.add != null) {

      if (this.nav.displayDialog.toString() == "הוספת כשרון") {
        let talent = ev
        this.store.dispatch(TalentsActions.AddTalentsAction({ talent }))
        this.store.dispatch(TalentsActions.GetTalentsAction())
        this.formTask.controls.talent.setValue(talent)
      }
      else {
        let activity = ev
        this.store.dispatch(ActivityActions.AddActivityAction({ activity }))
        this.store.dispatch(ActivityActions.GetActivityAction())
        this.formTask.controls.activity.setValue(activity)

      }
    }
    this.nav.clear();
  }

  onShow() {
  }

  onHide() {
  }
  s(){
    this.nav.clear()
  }
}
