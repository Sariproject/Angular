import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-talent',
  templateUrl: './new-talent.component.html',
  styleUrls: ['./new-talent.component.scss']
})
export class NewTalentComponent implements OnInit {
  
  formAdd:FormGroup
  @Output() clickSave :EventEmitter<object> = new EventEmitter();
  constructor(private fromBuilder:FormBuilder) { }

  ngOnInit() {
    this.formAdd=this.fromBuilder.group({
      add:['',Validators.pattern("[א-ת]{2,50}")]
    })
  }
  Save(){
    
      console.log(this.formAdd.value);
      const Newadd:object = this.formAdd.value; 
      this.clickSave.emit(Newadd)
      this.formAdd.reset()
  }
  t(){
    console.log(this.formAdd.valid);
    
  }
}
