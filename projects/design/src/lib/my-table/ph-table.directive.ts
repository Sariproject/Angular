import { AfterViewInit, Directive, Input, NgZone, OnInit, Renderer2 } from '@angular/core';
import { Table } from 'primeng/table';
import { MyTableComponent } from './my-table.component';

@Directive({
  selector: '[libPhTableDirectivep]'
})
export class PhTableDirective implements OnInit, AfterViewInit {


  constructor(
    private table: Table,

  ) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.table.contextMenuSelectionMode = 'separate';
    this.table.paginatorDropdownAppendTo = 'body';
  }

}

