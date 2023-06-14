import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectMatterPage } from './subject-matter.page';

describe('SubjectMatterPage', () => {
  let component: SubjectMatterPage;
  let fixture: ComponentFixture<SubjectMatterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubjectMatterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
