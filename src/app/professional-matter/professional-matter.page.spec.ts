import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessionalMatterPage } from './professional-matter.page';

describe('ProfessionalMatterPage', () => {
  let component: ProfessionalMatterPage;
  let fixture: ComponentFixture<ProfessionalMatterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfessionalMatterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
