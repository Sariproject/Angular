import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { ContextMenu } from 'primeng/contextmenu';

//import { PaginatorModel } from 'api';
import { LazyLoadEvent } from 'primeng/primeng';
import { Subject } from 'rxjs';
import { MyColumn } from 'projects/type/src/public_api';
import { PhControlValueAccessor } from './model/ph-control-value-accessor';


@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MyTableComponent extends PhControlValueAccessor implements OnChanges {
  

  @Input() @HostBinding('class.my-table-scrollable') scrolable = false;
  @Input() columns: MyColumn[] = [];
  @Input() values: object[] = [];
  @Input() scrollHeight = false;
  @Input() contextMenu: ContextMenu;
  @Input() totalRecords = 0;
  @Input() totalTitle = 'מספר שורות';
  @Input() showFilter= true;


  @Output() select = new EventEmitter();
  @Output() load = new EventEmitter<any>();

  @Output() onContextMenu$ = new Subject<object>();
  contextMenuSelection: any;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    const { values } = changes;
    console.log('values', values)
  }

  onContextMenu(event) {

    const {rowData} = event
    this.contextMenuSelection = rowData;
    this.onContextMenu$.next({ rowData  });
  }

  onRowClick(rowData) {

    console.log({ contextMenuSelection: this.contextMenuSelection });
    if (rowData['selected']) { return; }
    this.select.next({ columns: this.columns, value: rowData });
    this.values.forEach(value => delete value['selected'])
    rowData['selected'] = true;
  }

  onLazyLoad({ first, rows, ...event }: LazyLoadEvent) {
    this.load.emit({ skip: first, take: rows });
    console.log('onLazyLoad', event)
  }

}
