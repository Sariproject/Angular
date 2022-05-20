 import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'api';
import { last, tap } from 'rxjs/operators';
import { AdviceForStudent, StudentModel, TalentsModel } from 'type';

@Component({
  selector: 'app-table-update',
  templateUrl: './table-update.component.html',
  styleUrls: ['./table-update.component.scss']
})
export class TableUpdateComponent implements OnInit {

  flag = false
  selectedOption = ''
  id = ''
  name = []
  talents:TalentsModel[]
  oneTalentForClass: AdviceForStudent[]
  students :StudentModel[]
  tempStudent :StudentModel[]
  text=''
  
  constructor(private teacherService: TeachersService) { }

  ngOnInit() {

    this.teacherService.getTalents$().subscribe(
      ans => { this.talents = ans; console.log(ans); }
    );

    this.id = localStorage.getItem('password')

    if (this.teacherService.CurrentStudents.length == 0) {
      console.log(this.teacherService.CurrentStudents.length);

      this.teacherService.getStudentsById$(this.id).pipe(
        tap(ans => this.students = ans),
        tap(ans => this.teacherService.students = ans),
        tap(ans => console.log(ans)),
        tap(ans => this.students = this.filterStudents())).subscribe()


    }
    else {
      this.students = this.teacherService.CurrentStudents
      console.log(this.students);
      this.students = this.filterStudents()
    }

  }
  onChangeTalent() {
    console.log(this.selectedOption);
    if (this.selectedOption == "אחר") {
       this.flag = true
    }
    if (this.selectedOption != "-1" && this.selectedOption != "אחר") {
      this.teacherService.getOneTalentForClass$(this.teacherService.CurrentTeacher.Class,this.selectedOption).subscribe(
        ans => {
          if(ans!=undefined){
          this.oneTalentForClass = ans;
          console.log(this.oneTalentForClass);
          
          console.log(this.oneTalentForClass);
          this.students = this.students.map(student => ({ ...student, hasTalent: this.getTalent(student.name), countAdvice: this.getcountAdvice(student.name), moreDetails: this.getMoreDetails(student.name) }))
          console.log(this.students);
          this.tempStudent = []
          this.students.forEach(s => {
            let student = { Class: s.Class, name: s.name, hasTalent: s.hasTalent, moreDetails: s.moreDetails , countAdvice: s.countAdvice}
            this.tempStudent.push(student)
          })}
          else{
            this.students = this.students.map(student => ({ ...student, hasTalent: false, countAdvice: 0, moreDetails: '' }))
          }
          console.log(this.tempStudent);
        }
      )
    }
    else{
      this.students = this.students.map(student => ({ ...student, hasTalent: false, countAdvice: null, moreDetails: '' }))
    }
  }
  //פונקציה שבודקת האם קיים כשרון מסוים
  getTalent(i) {
    let is = this.oneTalentForClass.some(s => s.name == i)
    console.log(is);
    return is

  }
  //פונקציה שמביאה את כמות המלצות
  getcountAdvice(i) {
    let countAdvice = 0
    this.oneTalentForClass.forEach(s => {
      if (s.name == i) {
        console.log(s.countAdvice);
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
        console.log(s.moreDetails);
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
    console.log(r, "filterStudents");
    r = r.map(student => ({ Class: student.Class, name: student.name }))
    return r
  }

  saveOne(i) {
    
    this.name = this.name.filter(s => s != this.students[i].name)
    console.log(this.name);
    let fullname=this.students[i].name.split(' ')
    let firstName=fullname[0]
    let lastName=fullname[1]
    let talentId = this.selectedOption
    console.log(this.selectedOption,"]]]]]]]]]]]]]]]]]]]");
    console.log(this.tempStudent, "t");
    console.log(talentId);
    console.log(this.students[i], "s");
    console.log(this.tempStudent[i], "t");
    // אם הכשרון השתנה
    if (this.students[i].hasTalent != this.tempStudent[i].hasTalent) {
      if (this.students[i].hasTalent) {
        
        this.teacherService.addTalentForStudent$(firstName,lastName,talentId).subscribe(
          (msg) => { console.log(msg); },
          (err) => { console.log(err) }
        )
        if (this.students[i].moreDetails != '') {

          this.teacherService.updateMoreDetails$(firstName,lastName,talentId, this.students[i].moreDetails).subscribe(
            (msg) => { console.log(msg); },
            (err) => { console.log(err) }
          )
        }
      }
      else {

        this.teacherService.deleteTalentForStudent$(firstName,lastName,talentId).subscribe(
          (msg) => { console.log(msg, "מחיקת כשרון"); },
          (err) => { console.log(err) }
        )

        this.teacherService.deleteAdviceForStudent$(firstName,lastName, talentId).subscribe(
          (msg) => { console.log(msg, "מחיקת המלצה"); },
          (err) => { console.log(err) }
        )
        this.students[i].moreDetails=null
      }
    }
    else {
      
        
        this.teacherService.updateMoreDetails$(firstName,lastName, talentId, this.students[i].moreDetails).subscribe(
          (msg) => { console.log(msg); },
          (err) => { console.log(err) }
        )
      
    }
    //אם ההמלצה השתנתה
    if (this.students[i].countAdvice != this.tempStudent[i].countAdvice) {
      // המקורי שווה 0
      if (this.tempStudent[i].countAdvice == 0) {
        //insert
        this.teacherService.addAdviceForStudent$(firstName,lastName, talentId, this.students[i].countAdvice).subscribe(
          (msg) => { console.log(msg); },
          (err) => { console.log(err) }
        )
      }
      else {
        if (this.students[i].countAdvice == 0) {
          //delete
          this.teacherService.deleteAdviceForStudent$(firstName,lastName, talentId).subscribe(
            (msg) => { console.log(msg); },
            (err) => { console.log(err) }
          )
        }
        else {
          //update
          this.teacherService.updateAdviceForStudent$(firstName,lastName, talentId, this.students[i].countAdvice).subscribe(
            (msg) => { console.log(msg); },
            (err) => { console.log(err) }
          )
        }
      }
    }


    this.tempStudent[i].hasTalent = this.students[i].hasTalent
    this.tempStudent[i].moreDetails = this.students[i].moreDetails
    this.tempStudent[i].countAdvice = this.students[i].countAdvice

    console.log(this.tempStudent[i], "אחרי העדכונים");

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
  addTalent(){
    console.log(this.text);
    if(this.text==''){
      this.flag=false
    }
    else{
      if(!this.talents.some(s=>s.nameTalent==this.text)){
      this.teacherService.addNewTalent$(this.text).subscribe(
        ans=>{console.log(ans);
        this.flag=false;}
      )
    }
        console.log('true');
    }
    this.selectedOption="נגינה"
        console.log(this.selectedOption);
        
  }
}
