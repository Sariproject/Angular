
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminsService } from 'api';
import { SService } from 'projects/api/src/lib/services/servise';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { resultSearchModel } from 'type';
import { NavigationService } from 'src/app/services/navigation.service';
import { StudentComponent } from '../../student-page/student/student.component';





@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InformationComponent implements OnInit {
  r = []
  resultSearch: resultSearchModel[] = []
  @ViewChild('Student') mychildRef: StudentComponent;
  SearchTask = []
  SearchTalents = []
  SearchDetails = []
  modalWidth = 0
  modalHeight = 0
  header: string = 'חיפוש חדש'
  talents = []
  Activities = []
  students = []
  Result: any[][]
  pageIntor = 1
  index = 0
  class = ''
  flagClass: boolean = true
  SearcString = '';
  ArrayAll: any[];
  c0=true;c1=true;c2=true;c3=true

  constructor(public nav: NavigationService, private adminService: AdminsService, private formbuilder: FormBuilder, private Sno: SService, public dialog: MatDialog) { }


  ngOnInit() {
    this.adminService.Search$().subscribe(
      ans => {
        this.Result = ans,
          console.log(ans),
          this.filterArray();
      }
    )

  }
  changeText(value) {
    if (value.length == 1) {
      this.adminService.getStudentsForFilter(value).subscribe(
        ans => { this.students = ans; console.log(this.students); }
      )
    }
  }

  putClass(formSearch) {
    let string = ""
    string = formSearch.name
    let fullname = string.split(" ")
    formSearch.class = fullname.pop()
    formSearch.name = fullname.join(" ")
    formSearch.num = null
    return formSearch;
  }

  Search(array) {
    console.log(array[0], "kkk");
    this.SearcString = array[1]
    this.nav.clear();
    this.SearchDetails = []
    for (const control of Object.keys(array[0])) {

      if (array[0][control] != '' && array[0][control] != null) {
        switch (control) {
          case 'name': {
            array[0] = this.putClass(array[0])
            this.SearchDetails.push({ Name: array[0].name })
            break;
          }
          case 'class':
            if (array[0].name == null || array[0].name == '')
              this.SearchDetails.push({ Class: array[0][control] + '' + array[0].num })
            else
              this.SearchDetails.push({ Class: array[0][control] })
            break;
          case 'Talent':
            this.SearchDetails.push({ Talent: array[0][control] })
            break;
          case 'Activity':
            this.SearchDetails.push({ Activity: array[0][control] })
            break;
          case 'year':
            this.SearchDetails.push({ year: array[0][control] })
            break;
        }
      }
    }
    console.log(this.SearchDetails);

  }

  openNewSearch() {
    this.nav.clear();
    this.modalWidth = 0
    this.modalHeight = 0
    this.nav.showNewCustomerDialog = true;
    this.nav.displayDialog = this.header;
  }



  print() {
    window.print()
  }


  filterArray() {
    console.log(this.Result);

    let ArrayTalent = []
    let ArrayTasks = []
    let resultFinally = []
    this.Result[0].forEach(student => {
      if (this.Result[1] != null) {
        this.Result[1].forEach(Talent => {
          if (Talent.StudentId == student.StudentId) {
            ArrayTalent.push(Talent)
          }
        })
      }
      if (this.Result[2] != null)
        this.Result[2].forEach(Taskes => {
          if (Taskes.StudentId == student.StudentId) {
            ArrayTasks.push(Taskes)
          }
        })
      resultFinally.push({ ...student, ArrayTalent, ArrayTasks })
      ArrayTalent = [],
        ArrayTasks = []
    })


    console.log(resultFinally);
    this.resultSearch = resultFinally
    this.r.push(this.resultSearch)
    let R1 = [], R2 = [], R3 = [], R4 = []
    resultFinally.forEach(t => {

      switch (t.Class[0]) {

        case 'א': {
          R1.push(t)
          break;
        }
        case 'ב': {
          R2.push(t)

          break;
        }
        case 'ג': {

          R3.push(t)
          break;
        }
        case 'ד': {

          R4.push(t)
          break;
        }

      }
    });

    let Array = [R1, R2, R3, R4]
    this.ArrayAll = []
    for (let r of Array) {
      let ArrayF = []
      r.forEach(t => {
        if (ArrayF.length == 0) {
          let object = {}
          object[t.Class] = [t]
          ArrayF.push(object)
        }
        else {
          let index = ArrayF.findIndex(i => Object.keys(i)[0] == t.Class)

          if (index != -1) {
            ArrayF[index][t.Class].push(t)
          }
          else {

            let object = {}
            object[t.Class] = [t]
            ArrayF.push(object)
          }
        }

      })
      let t = []
      let arrayC = []
      ArrayF.forEach((k) => t.push(Object.keys(k)[0]))
      for (let c of t.sort()) {
        let index = ArrayF.findIndex(i => Object.keys(i)[0] == c)

        arrayC.push(ArrayF[index][c])
      }

      this.ArrayAll.push(arrayC)
    }
    console.log(this.ArrayAll);





    let RasultClass = []

    // console.log(this.resultSearch);
  }
  onShow() { }
  onHide() { }
  view(id) {

    console.log(id);
    //this.mychildRef.studentId=id

    this.header = "דף תלמידה"
    this.mychildRef.getForAdmin(id)
    this.nav.clear();
    this.modalWidth = 1000
    this.modalHeight = 600
    this.nav.showStudentDialog = true;


  }
  close() {
    this.nav.clear();
  }

  b(i, o) {
    console.log(i, o, "   hghfhh");

  }
  getColor(i) {
    if (i % 2 == 0) {
      return 'white'
    }
    else {
      return '#f2f2f2'
    }
  }
  getLength(i) {
    if (this.class == '') {
      this.class = i
      this.flagClass = true
    }
    else {
      if (this.class != i) {
        this.class = i
        this.flagClass = true
      }
      else {
        this.flagClass = false
      }
    }
    return this.flagClass
  }
  f(c) {
    console.log(c);
    
    if (c == 'All') {
      
      for (let i = 0; i < 4; i++) {
        document.getElementById(`c${i}`).style.display = ""
        document.getElementById(`b${i}`).style.left = ""
      }
    }
    else {
      for (let i = 0; i < 4; i++) {
        if (c == `c${i}`) {
          document.getElementById(`c${i}`).style.display = ""
          document.getElementById(`b${i}`).style.left = "0"

        }
        else{
         document.getElementById(`c${i}`).style.display = "none"
         document.getElementById(`b${i}`).style.left = ""
        }
      }
    }
  }
}


