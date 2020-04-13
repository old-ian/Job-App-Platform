import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityPreferenceComponent } from './opportunity-preference.component';

describe('OpportunityPreferenceComponent', () => {
  let component: OpportunityPreferenceComponent;
  let fixture: ComponentFixture<OpportunityPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
