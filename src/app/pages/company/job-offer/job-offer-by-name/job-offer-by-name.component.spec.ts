import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferByNameComponent } from './job-offer-by-name.component';

describe('JobOfferByNameComponent', () => {
  let component: JobOfferByNameComponent;
  let fixture: ComponentFixture<JobOfferByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
