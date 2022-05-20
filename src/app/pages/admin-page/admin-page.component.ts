import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PhTabModel } from 'projects/design/src/lib/ph-tabs/model/ph-tab-model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {


  tabs:PhTabModel[]
  @ViewChild('update', { read: TemplateRef, static: true }) updatesTmpl: TemplateRef<any>;
  @ViewChild('information', { read: TemplateRef, static: true }) informationTmpl: TemplateRef<any>;
  @ViewChild('addition', { read: TemplateRef, static: true }) additionTmpl: TemplateRef<any>;
  


  constructor(private router: Router) { }

  ngOnInit() {
    this.tabs = [
       {
        header: 'תפקידים',
        value: "",
        tmpl: this.additionTmpl,
        disabled: false
      },
      {
        header: 'מידע',
        value: "",
        tmpl: this.informationTmpl,
        disabled: false
      },
      {
        header: 'עדכונים',
        value: "",
        tmpl: this.updatesTmpl,
        disabled: false
      },
      
     
    ];
  }
  
}
