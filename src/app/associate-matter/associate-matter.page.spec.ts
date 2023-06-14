import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociateMatterPage } from './associate-matter.page';

describe('AssociateMatterPage', () => {
  let component: AssociateMatterPage;
  let fixture: ComponentFixture<AssociateMatterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssociateMatterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
