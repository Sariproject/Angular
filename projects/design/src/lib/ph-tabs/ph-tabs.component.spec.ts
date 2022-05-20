import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhTabsComponent } from './ph-tabs.component';

describe('PhTabsComponent', () => {
  let component: PhTabsComponent;
  let fixture: ComponentFixture<PhTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
