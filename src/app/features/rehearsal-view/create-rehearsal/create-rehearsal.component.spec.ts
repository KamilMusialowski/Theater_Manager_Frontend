import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRehearsalComponent } from './create-rehearsal.component';

describe('CreateRehearsalComponent', () => {
  let component: CreateRehearsalComponent;
  let fixture: ComponentFixture<CreateRehearsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRehearsalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRehearsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
