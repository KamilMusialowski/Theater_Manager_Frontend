import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTheaterModalComponent } from './create-theater-modal.component';

describe('CreateTheaterModalComponent', () => {
  let component: CreateTheaterModalComponent;
  let fixture: ComponentFixture<CreateTheaterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTheaterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTheaterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
