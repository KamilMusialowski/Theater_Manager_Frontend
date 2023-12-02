import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTheaterModalComponent } from './edit-theater-modal.component';

describe('EditTheaterModalComponent', () => {
  let component: EditTheaterModalComponent;
  let fixture: ComponentFixture<EditTheaterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTheaterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTheaterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
