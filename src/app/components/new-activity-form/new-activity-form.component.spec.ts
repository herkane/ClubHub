import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActivityFormComponent } from './new-activity-form.component';

describe('NewActivityFormComponent', () => {
  let component: NewActivityFormComponent;
  let fixture: ComponentFixture<NewActivityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewActivityFormComponent]
    });
    fixture = TestBed.createComponent(NewActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
