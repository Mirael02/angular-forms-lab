import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipWizard } from './scholarship-wizard';

describe('ScholarshipWizard', () => {
  let component: ScholarshipWizard;
  let fixture: ComponentFixture<ScholarshipWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipWizard],
    }).compileComponents();

    fixture = TestBed.createComponent(ScholarshipWizard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
