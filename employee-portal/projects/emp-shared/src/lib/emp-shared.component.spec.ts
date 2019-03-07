import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSharedComponent } from './emp-shared.component';

describe('EmpSharedComponent', () => {
  let component: EmpSharedComponent;
  let fixture: ComponentFixture<EmpSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
