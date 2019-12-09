import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSetProfileComponent } from './signup-set-profile.component';

describe('SignupSetProfileComponent', () => {
  let component: SignupSetProfileComponent;
  let fixture: ComponentFixture<SignupSetProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSetProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
