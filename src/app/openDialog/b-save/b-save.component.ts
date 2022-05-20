import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-b-save',
  templateUrl: './b-save.component.html',
  styleUrls: ['./b-save.component.scss']
})
export class BSaveComponent implements OnInit {

  @Input() who=''
  @Input() Save=[]
  @Output() clickSave :EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
    
    console.log(this.Save);
    
  }
  onSave(i){
    
    this.clickSave.emit(i)
  }
  
}
