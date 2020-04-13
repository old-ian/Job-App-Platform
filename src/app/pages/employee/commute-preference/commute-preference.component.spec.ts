import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommutePreferenceComponent } from './commute-preference.component';

describe('CommutePreferenceComponent', () => {
  let component: CommutePreferenceComponent;
  let fixture: ComponentFixture<CommutePreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommutePreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommutePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
