import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, ViewChild, HostBinding, Output, EventEmitter, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { PhTabModel } from './model/ph-tab-model';
import { TabView } from 'primeng/primeng';

@Component({
  selector: 'lib-ph-tabs',
  templateUrl: './ph-tabs.component.html',
  styleUrls: ['./ph-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PhTabsComponent implements AfterContentInit {
  private _tabs: PhTabModel[];
  private _selectedFirst: any;

  @ViewChild(TabView, { static: false }) tabsRef: TabView;

  @Input() set tabs(tabs: PhTabModel[]) {
    this._tabs = tabs || [];
    this.createTabs();
  }

  @Input() set selectedFirst(selectedFirst: any) {
    this._selectedFirst = selectedFirst;
    this.createTabs();
  }
  @Input() tabContent = true;
  @Input() mainTabs = false;
  @Input() tabsContainer = false;
  @Input() limited = false;
  @Input() classes: string;
  @Input() hasPanels = true;
  @HostBinding('class.ph-scrollable') @Input() scrollable = false;

  @Output() change = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() init = new EventEmitter();

  tabsList: (PhTabModel & { selected: boolean })[];

  get selectedValue(): any {
    const selected = this.tabsRef && this.tabsRef.findSelectedTab();
    const selectedTab = selected && this._tabs.find(tab => tab.header === selected.header);
    return selectedTab && selectedTab.value || this._tabs[0].value
  }

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterContentInit() {
    this.init.emit();
  }

  createTabs() {
    this.tabsList = this._tabs.map((tab, idx) => ({
      ...tab,
      selected: this._selectedTab(tab, idx === 0)
    }))
  }

  findSelectedTab() {
    return this.tabsRef && this.tabsRef.findSelectedTab();
  }

  onChangeTab(event) {
    console.log("event",event);
    
    this.change.next({ ...this.tabs[event.index], ...event });
    this.onChange.next({ ...this.tabs[event.index], ...event });
  }

  private _selectedTab(tab: PhTabModel, first: boolean) {
    let test = !!this._selectedFirst && tab.value === <any>this._selectedFirst;
    test = test || !!this._selectedFirst && tab.value === <any>this._selectedFirst.value;
    return test || !this._selectedFirst && first;
  }

}
