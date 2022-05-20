import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingToSoftwareTalentComponent } from './writing-to-software-talent.component';

describe('WritingToSoftwareTalentComponent', () => {
  let component: WritingToSoftwareTalentComponent;
  let fixture: ComponentFixture<WritingToSoftwareTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingToSoftwareTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingToSoftwareTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
