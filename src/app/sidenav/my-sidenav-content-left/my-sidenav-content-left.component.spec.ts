import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySidenavContentLeftComponent } from './my-sidenav-content-left.component';

describe('MySidenavContentLeftComponent', () => {
  let component: MySidenavContentLeftComponent;
  let fixture: ComponentFixture<MySidenavContentLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySidenavContentLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySidenavContentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
