import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PhTabModel } from 'projects/design/src/lib/ph-tabs/model/ph-tab-model';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {


  tabs: PhTabModel[]
  flag=0
  @ViewChild('updateTalent', { read: TemplateRef, static: true }) updateTalentTmpl: TemplateRef<any>;
  @ViewChild('updateYear', { read: TemplateRef, static: true }) updateYearTmpl: TemplateRef<any>;
  constructor(private router: Router) { }

  ngOnInit() {
    this.tabs = [{
      header: 'עדכון כשרונות',
      value: "",
      tmpl: this.updateTalentTmpl,
      disabled: false
    },
     {
      header: 'עדכון שנתי',
      value: "",
      tmpl: this.updateYearTmpl,
      disabled: false
    }]
  }
  updateYear() {
    this.router.navigate(['/Admin/year'])
  }
  updateTalents() {
    this.router.navigate(['/Admin/students'])
  }
  view(num){
    this.flag=num
  }
}
