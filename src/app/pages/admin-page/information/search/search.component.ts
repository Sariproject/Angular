import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NEVER, Observable } from 'rxjs';
import { ActivityActions, ActivitySelector, TalentsActions, talentsSelector } from 'store';
import { Store } from '@ngrx/store';
import { AdminsService } from 'api';
import { tap } from 'rxjs/operators';
import { FormatWidth } from '@angular/common';
import { newStudentModel } from 'projects/type/src/public_api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  formSearch: FormGroup
  Classes = ['ד', 'ג', 'ב', 'א']
  Numbers = [1, 2, 3, 4, 5, 6, 7]
  activities = []
  students = []
  talents = []
  year = []
  i: FormatWidth
  students$: Observable<any[]> = NEVER;
  @Output() clickSave: EventEmitter<object> = new EventEmitter();
  //@Output() clickChange: EventEmitter<object> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private store: Store<any>, private adminService: AdminsService) { }

  ngOnInit() {

    this.store.dispatch(TalentsActions.GetTalentsAction())
    this.store.select(talentsSelector).pipe(
      tap(ans => this.talents = ans),
      tap(ans => console.log(ans, "pppppp"))

    ).subscribe();
    this.store.dispatch(ActivityActions.GetActivityAction())
    this.store.select(ActivitySelector).pipe(
      tap(ans => this.activities = ans),
      tap(ans => console.log(ans, "pppppp"))

    ).subscribe();

    this.initform()
    this.adminService.getYears$().
      subscribe(ans => {
        this.year = ans, console.log(ans);
      })


  }
  initform() {
    this.formSearch = this.formBuilder.group({
      name: [''],
      class: [''],
      num: [0],
      Talent: [''],
      Activity: [''],
      year: ['']
    })
  }
  Save() {
    console.log(this.formSearch.value);
    const NewSearch: object = this.formSearch.value;
    let str = ''
    let arrK = Object.keys(NewSearch)
    let arrV = Object.values(NewSearch)
    for (let i = 0; i < arrK.length; i++) {
      if (arrV[i] != "" && arrV[i] != null) {

        switch (arrK[i]) {
          case 'name':
            str += `${arrV[i]} ,`;
            break;

          case 'class': {
            if (NewSearch['num'] != 0 && NewSearch['num'] != null)
              str += `כיתה : ${arrV[i]}${NewSearch['num']} ,`;
              else{
                str += `מחזור : ${arrV[i]} ,`;
              }
            break;
          }
          case 'num':

            break;
          case 'Talent':
            str += `תפקיד : ${arrV[i]} ,`;
            break;
          case 'Activity':
            str += `פעילות : ${arrV[i]} ,`;
            break;
          case 'year':
            str += `בשנה : ${arrV[i]} ,`;
            break;
        }

      }


    }

    str = str.substring(0, str.length - 2)
    console.log(str);

    this.clickSave.emit([NewSearch,str])
    this.formSearch.reset()

  }
  changeText(value) {
    if (value.length == 1) {
      this.adminService.getStudentsForFilter(value).pipe(
        tap(ans => this.students = ans),
        tap(ans => console.log(this.students))

      ).subscribe()


    }
  }
  changeItem(i) {
    console.log(i);

    // this.clickSave.emit(i)
  }
}
