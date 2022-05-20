import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSaveComponent } from './b-save.component';

describe('BSaveComponent', () => {
  let component: BSaveComponent;
  let fixture: ComponentFixture<BSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
