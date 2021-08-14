import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuebookingComponent } from './continuebooking.component';

describe('ContinuebookingComponent', () => {
  let component: ContinuebookingComponent;
  let fixture: ComponentFixture<ContinuebookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuebookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
