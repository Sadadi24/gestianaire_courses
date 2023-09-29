import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddOrEditListPage } from './add-or-edit-list.page';

describe('AddOrEditListPage', () => {
  let component: AddOrEditListPage;
  let fixture: ComponentFixture<AddOrEditListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddOrEditListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
