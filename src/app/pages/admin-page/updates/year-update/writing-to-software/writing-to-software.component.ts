import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { AdminsService } from 'api';
import { NavigationService } from 'src/app/services/navigation.service';
import { newClassModel } from 'type/type';

@Component({
  selector: 'app-writing-to-software',
  templateUrl: './writing-to-software.component.html',
  styleUrls: ['./writing-to-software.component.scss']
})
export class WritingToSoftwareComponent implements OnInit {

  formStudent: FormGroup = new FormGroup({});
  formStudentList: FormArray = new FormArray([])
  flagView = false
  countStudents: Number[]
  classes = ["א", "ב", "ג", "ד"];
  numbers = [1, 2, 3, 4, 5, 6, 7];
  numClass: number = 0
  nameClass: string = ''
  class = ''
  countStudentsLength= 0
  header=''
  constructor(private formBuilder: FormBuilder, private adminService: AdminsService,public nav: NavigationService) { }

  ngOnInit() {
    this.formStudent = this.formBuilder.group({
      class: [this.class],
      firstName: [''],
      lastName: [''],
      Id: [''],
      address: [''],
      phone: [''],

    });

  }
  cheackOfNum(ev: Event) {
    this.numClass = this.numbers[ev.target.options.selectedIndex - 1]
    console.log(this.numClass)
    this.view()
  }
  cheackOfClass(ev: Event) {

    this.nameClass = this.classes[ev.target.options.selectedIndex - 1]
    console.log(this.nameClass, "0");
    this.view()
  }
  view() {
    if (this.nameClass != '' && this.numClass != 0 && this.countStudentsLength != 0) {
      console.log('yes');
      console.log(this.countStudentsLength);

      this.countStudents = Array(this.countStudentsLength).fill(1)
      console.log(this.countStudents.length);

      this.flagView = true
      this.class = this.nameClass + this.numClass
      console.log(this.class);
      this.formStudentList
      for (let i = 0; i < this.countStudentsLength; i++) {
        if (i == 0) {
          this.formStudentList.insert(0, new FormGroup({
            lastName: new FormControl(''),
            firstName: new FormControl(''),
            class: new FormControl(this.class),
            Id: new FormControl(''),
            address: new FormControl(''),
            phone: new FormControl(''),

          }))
        }
        else {
          this.addStudent()
        }
      }
    }
  }
  addStudent() {
    this.formStudentList.push(new FormGroup({
      lastName: new FormControl(''),
      firstName: new FormControl(''),
      class: new FormControl(this.class),
      Id: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),

    }))
  }
  updata() {
    console.log(this.formStudentList.value.length);


    this.formStudentList.value.forEach(control => {
      this.adminService.insertStudents$(control).subscribe(
        ans => console.log(ans)

      )

    });

  }
  addNewClass(){
      this.header='כיתה חדשה'
      this.nav.clear();
      this.nav.showNewCustomerDialog = true;
      this.nav.displayDialog = 'newOrder';
  
  }
  onShow(){
  }

  onHide(){    
  }
  clickSave(el:newClassModel){
    this.nav.clear();
    console.log(el);
    this.countStudentsLength=el.countStudents
    this.class=el.nameClass+el.numClass
    console.log(this.class);
    
    this.countStudents = Array(this.countStudentsLength).fill(1)
    for (let i = 0; i < this.countStudentsLength; i++) {
      if (i == 0) {
        this.formStudentList.insert(0, new FormGroup({
          lastName: new FormControl(''),
          firstName: new FormControl(''),
          class: new FormControl(this.class),
          Id: new FormControl(''),
          address: new FormControl(''),
          phone: new FormControl(''),

        }))
      }
      else {
        this.addStudent()
      }
    }
  }
  h(i){
    console.log(i);

  }
}
