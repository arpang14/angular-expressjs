import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcomComponent } from './testcom.component';

describe('TestcomComponent', () => {
  let component: TestcomComponent;
  let fixture: ComponentFixture<TestcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it(`should have as propmy 'Yash Title'`, () => {
    const fixture = TestBed.createComponent(TestcomComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.propmy).toEqual('Yash Title');
  });
});
