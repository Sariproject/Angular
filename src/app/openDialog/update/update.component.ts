import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ActivityActions, ActivitySelector, TalentsActions, talentsSelector } from 'store';
import { Store } from '@ngrx/store';
import { AdminsService, StudentsService } from 'api';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {
  formTaskUpdate: FormGroup; 
  talents=[];
  Activity=[];
  button='סגור'
  formTaskNow={}
  @Output() clickSave :EventEmitter<object> = new EventEmitter();
  constructor(private formBuilder:FormBuilder,private store: Store<any>,private studentService:StudentsService) {}  
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

    
    this.formTaskUpdate = this.formBuilder.group({
      activity: ['', Validators.required],
      talent: ['', Validators.required],
      size: ['', Validators.required],
      misgeret: ['', Validators.required],
    })
   } 


  Form(t){
    console.log(t);
    
   this.button='סגור'
    this.formTaskNow['misgeret']=t.frame
    this.formTaskNow['size']=t.taskType
    this.formTaskNow['activity']=t.nameActivity
    this.formTaskNow['talent']=t.nameTalent
    this.formTaskNow['taskId']=t.taskId
    this.formTaskUpdate.controls.misgeret.setValue(t.frame)
    this.formTaskUpdate.controls.size.setValue(t.taskType)
    this.formTaskUpdate.controls.activity.setValue(t.nameActivity)
    this.formTaskUpdate.controls.talent.setValue(t.nameTalent)
    
  }
  changeTasks(){
    console.log("ppp");
    this.button='עדכן'
    console.log(this.formTaskUpdate.value);
    
  }
  onSave(){
    let flag=0
    console.log(this.formTaskNow);
    if(this.button='עדכן'){
      for (const key in this.formTaskUpdate.value) {
        if(this.formTaskUpdate.value[key]!=this.formTaskNow[key]){
          console.log("ppp");
         
             flag++
        }

      }
      if(flag!=0){
        console.log('יש שינוי');
        let A = this.Activity.find(a => a.nameActivity == this.formTaskUpdate.controls.activity.value);
        let T = this.talents.find(t => t.nameTalent == this.formTaskUpdate.controls.talent.value);

        let Tasks={}
        this.formTaskUpdate.value.activity=A.activityId
        this.formTaskUpdate.value.talent=T.talentId
        Tasks=this.formTaskUpdate.value
        Tasks['taskId']=this.formTaskNow.taskId
        console.log(Tasks);
        
        this.studentService.UpdateTasks$(Tasks).subscribe(
          ans=>console.log(ans)
          
        )
        
      }
    }
    
    this.clickSave.emit()
    
    
  }
}

