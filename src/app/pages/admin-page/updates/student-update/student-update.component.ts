import { Component, OnInit } from '@angular/core';
import { AdminsService, TeachersService } from 'api';
import { tap } from 'rxjs/operators';
import { AdviceForStudent, StudentModel, TalentsModel } from 'type';
import { select, Store } from '@ngrx/store';
import { TalentsActions, talentsSelector } from 'store';


@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss']
})
export class StudentUpdateComponent implements OnInit {

  showSelect = false
  classes = ["א", "ב", "ג", "ד"];
  numbers = [1, 2, 3, 4, 5, 6, 7];
  numClass: number=0
  nameClass: string=''
  class = ''
  flag: boolean;
  talents = []
  students: StudentModel[]=[]
  tempStudent: StudentModel[]
  oneTalentForClass: AdviceForStudent[]
  name = []
  selectedOption = undefined
  flagselectedOption: boolean
  contentMenuItems = []
  columns = []
  newClass=0
  studentStart: StudentModel[];
  constructor(private adminService: AdminsService, private teacherService: TeachersService, private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(TalentsActions.GetTalentsAction())
    this.store.select(talentsSelector).pipe(
      tap(ans => this.talents = ans),
      tap(ans => console.log(ans, "pppppp"))

    ).subscribe();



  }

  cheackOfNum(num) {
    
    if(this.numClass==0 ){
       this.newClass++
    }
    this.numClass = num
  
    this.view()
  }
  cheackOfClass(ev) {
    
    if(this.nameClass=='' ){
      this.newClass++
   }
    this.nameClass = ev
    
    this.view()
  }
  view() {
    if(this.newClass==2){
      let g=document.getElementById("mainStart");
      g.style.display='none'
      g.style.width='5006%'

      let el=document.getElementById("mainSide");
      el.style.display='inline-flex'
    }
    if (this.nameClass != undefined && this.numClass != null) {
      console.log('yes');
      this.flag = true
      this.class = this.nameClass + this.numClass
      console.log(this.class);
      this.adminService.getStudentsByClass$(this.class).subscribe(
        ans => {
          if (ans != null) {
            this.students = ans,
              this.students = this.filterStudents();
              this.studentStart=this.students
            console.log(ans)
          }
          else {
            this.students =[]
              console.log("עדיין לא בוצעו עדכונים השנה");
                
          }
        }
      )


    }
  }
  onChangeTalent() {
    console.log(this.selectedOption);
    if (this.selectedOption == "אחר") {
      this.flagselectedOption = true
    }
    if (this.selectedOption != "אחר") {
      this.flagselectedOption = false
      this.teacherService.getOneTalentForClass$(this.class, this.selectedOption).subscribe(
        ans => {
          if (ans != undefined) {
            this.oneTalentForClass = ans;
            //console.log(this.oneTalentForClass);
            this.students = this.students.map(student => ({ ...student, hasTalent: this.getTalent(student.name), countAdvice: this.getcountAdvice(student.name), moreDetails: this.getMoreDetails(student.name) }))
            //console.log(this.students);
            this.tempStudent = []
            this.students.forEach(s => {
              let student = { Class: s.Class, name: s.name, hasTalent: s.hasTalent, moreDetails: s.moreDetails, countAdvice: s.countAdvice }
              this.tempStudent.push(student)
            })
          }
          else {
            this.students = this.students.map(student => ({ ...student, hasTalent: false, countAdvice: 0, moreDetails: '' }))
          }
          //console.log(this.tempStudent);
        }
      )
    }
    else {
      this.students = this.students.map(student => ({ ...student, hasTalent: false, countAdvice: null, moreDetails: '' }))
    }

  }
  //פונקציה שבודקת האם קיים כשרון מסוים
  getTalent(i) {
    let is = this.oneTalentForClass.some(s => s.name == i)
    //console.log(is);
    return is

  }
  //פונקציה שמביאה את כמות המלצות
  getcountAdvice(i) {
    let countAdvice = 0
    this.oneTalentForClass.forEach(s => {
      if (s.name == i) {
        //console.log(s.countAdvice);
        countAdvice = s.countAdvice
      }
    });
    if (countAdvice == null)
      return 0
    return countAdvice
  }
  getMoreDetails(i) {
    let text = ''
    this.oneTalentForClass.forEach(s => {
      if (s.name == i) {
        //console.log(s.moreDetails);
        text = s.moreDetails
      }
    });
    return text
  }

  filterStudents() {
    let l = this.students
    let r = [l[0]]
    l.forEach(student => {

      if (r.some(s => s.name == student.name) == false)
        r.push(student)
    })
    //console.log(r, "filterStudents");
    r = r.map(student => ({ Class: student.Class, name: student.name }))
    return r
  }

  saveOne(i) {

    this.name = this.name.filter(s => s != this.students[i].name)
    //console.log(this.name);
    let fullname = this.students[i].name.split(' ')
    let lastName = fullname.pop()
    let firstName = ''
    for (const i of fullname) {
      firstName = firstName + i + ' '
    }
    let talentId = this.selectedOption
    ///console.log(this.selectedOption, "]]]]]]]]]]]]]]]]]]]");
    //console.log(this.tempStudent, "t");
    //console.log(talentId);
    //console.log(this.students[i], "s");
    //console.log(this.tempStudent[i], "t");
    // אם הכשרון השתנה
    if (this.students[i].hasTalent != this.tempStudent[i].hasTalent) {
      if (this.students[i].hasTalent) {

        this.teacherService.addTalentForStudent$(firstName, lastName, talentId).subscribe(
          (msg) => { console.log(msg); },
          (err) => { console.log(err) }
        )
        if (this.students[i].moreDetails != '') {

          this.teacherService.updateMoreDetails$(firstName, lastName, talentId, this.students[i].moreDetails).subscribe(
            (msg) => { console.log(msg); },
            (err) => { console.log(err) }
          )
        }
      }
      else {

        this.teacherService.deleteTalentForStudent$(firstName, lastName, talentId).subscribe(
          (msg) => { console.log(msg, "מחיקת כשרון"); },
          (err) => { console.log(err) }
        )

        this.teacherService.deleteAdviceForStudent$(firstName, lastName, talentId).subscribe(
          (msg) => { console.log(msg, "מחיקת המלצה"); },
          (err) => { console.log(err) }
        )
        this.students[i].moreDetails = null
      }
    }
    else {


      this.teacherService.updateMoreDetails$(firstName, lastName, talentId, this.students[i].moreDetails).subscribe(
        (msg) => { console.log(msg); },
        (err) => { console.log(err) }
      )

    }
    //אם ההמלצה השתנתה
    if (this.students[i].countAdvice != this.tempStudent[i].countAdvice) {
      // המקורי שווה 0
      if (this.tempStudent[i].countAdvice == 0) {
        //insert
        this.teacherService.addAdviceForStudent$(firstName, lastName, talentId, this.students[i].countAdvice).subscribe(
          (msg) => { console.log(msg); },
          (err) => { console.log(err) }
        )
      }
      else {
        if (this.students[i].countAdvice == 0) {
          //delete
          this.teacherService.deleteAdviceForStudent$(firstName, lastName, talentId).subscribe(
            (msg) => { console.log(msg); },
            (err) => { console.log(err) }
          )
        }
        else {
          //update
          this.teacherService.updateAdviceForStudent$(firstName, lastName, talentId, this.students[i].countAdvice).subscribe(
            (msg) => { console.log(msg); },
            (err) => { console.log(err) }
          )
        }
      }
    }


    this.tempStudent[i].hasTalent = this.students[i].hasTalent
    this.tempStudent[i].moreDetails = this.students[i].moreDetails
    this.tempStudent[i].countAdvice = this.students[i].countAdvice

   // console.log(this.tempStudent[i], "אחרי העדכונים");

  }

  onChange(name, state) {
    console.log(name, state);
    this.name.push(name)
  }
  some(na) {
    if (this.name.some(s => s == na))
      return true
    return false
  }
  saveAll() {
    this.students.forEach(s => {
      if (this.name.some(n => n == s.name))
        this.saveOne(this.students.indexOf(s))
    });
    this.name = []
  }
  onChangeNumber(name, state) {
    console.log(name, state);
  }
  onChangeText(name, state) {
    console.log(name, state);
  }
   myFunction() {
    
    var input, filter;
    input = document.getElementById('inputSort');
    filter = input.value
    
    if(filter.trim().length!=0){
      console.log("ppp");
      
      this.students=this.students.filter(i=>i.name.indexOf(filter)> -1)
      
     // console.log(arr);
      
    }
    
    console.log(filter);
    
    
}

}
