import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySidenavContentLeftTab01Component } from './my-sidenav-content-left-tab01.component';

describe('MySidenavContentLeftTab01Component', () => {
  let component: MySidenavContentLeftTab01Component;
  let fixture: ComponentFixture<MySidenavContentLeftTab01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySidenavContentLeftTab01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySidenavContentLeftTab01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
