import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseaddComponent } from './expenseadd.component';

describe('ExpenseaddComponent', () => {
  let component: ExpenseaddComponent;
  let fixture: ComponentFixture<ExpenseaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
