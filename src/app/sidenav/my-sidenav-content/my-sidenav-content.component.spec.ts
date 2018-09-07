import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySidenavContentComponent } from './my-sidenav-content.component';

describe('MySidenavContentComponent', () => {
  let component: MySidenavContentComponent;
  let fixture: ComponentFixture<MySidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
