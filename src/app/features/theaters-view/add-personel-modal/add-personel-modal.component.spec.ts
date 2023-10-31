import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonelModalComponent } from './add-personel-modal.component';

describe('AddPersonelModalComponent', () => {
  let component: AddPersonelModalComponent;
  let fixture: ComponentFixture<AddPersonelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonelModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersonelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
