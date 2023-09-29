import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailListePage } from './detail-liste.page';

describe('DetailListePage', () => {
  let component: DetailListePage;
  let fixture: ComponentFixture<DetailListePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
