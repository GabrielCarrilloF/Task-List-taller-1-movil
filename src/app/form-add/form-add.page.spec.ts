import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddPage } from './form-add.page';

describe('FormAddPage', () => {
  let component: FormAddPage;
  let fixture: ComponentFixture<FormAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
