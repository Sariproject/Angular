import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { newClassModel } from 'type';

@Component({
  selector: 'app-add-new-class',
  templateUrl: './add-new-class.component.html',
  styleUrls: ['./add-new-class.component.scss']
})
export class AddNewClassComponent implements OnInit {
  
  formNewClass:FormGroup
  classes = ["א", "ב", "ג", "ד"];
  numbers = [1, 2, 3, 4, 5, 6, 7];
  @Output() clickSave :EventEmitter<newClassModel> = new EventEmitter();
  constructor(private fromBuilder:FormBuilder) { }

  ngOnInit() {
    this.formNewClass=this.fromBuilder.group({
      nameClass:['',Validators.required],
      numClass:[0,Validators.required],
      countStudents:[30,[Validators.min(29),Validators.max(40)]]
    })
  }
  save() {
    console.log(this.formNewClass.value);
    const newClass:newClassModel = this.formNewClass.value; 
    this.clickSave.emit(newClass)
    this.formNewClass.reset()
  }
}
