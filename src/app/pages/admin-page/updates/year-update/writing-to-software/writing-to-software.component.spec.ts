import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingToSoftwareComponent } from './writing-to-software.component';

describe('WritingToSoftwareComponent', () => {
  let component: WritingToSoftwareComponent;
  let fixture: ComponentFixture<WritingToSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingToSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingToSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
