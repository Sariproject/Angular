import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss']
})
export class SuccessfulComponent implements OnInit {

  @Output() clickSave :EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSave(){
    this.clickSave.emit()
  }
}
