import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarListDetailsComponent } from './navbar-list-details.component';

describe('NavbarListDetailsComponent', () => {
  let component: NavbarListDetailsComponent;
  let fixture: ComponentFixture<NavbarListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
