import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsitionsComponent } from './propsitions.component';

describe('PropsitionsComponent', () => {
  let component: PropsitionsComponent;
  let fixture: ComponentFixture<PropsitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropsitionsComponent]
    });
    fixture = TestBed.createComponent(PropsitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
