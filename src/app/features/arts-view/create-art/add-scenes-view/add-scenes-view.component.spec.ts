import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScenesViewComponent } from './add-scenes-view.component';

describe('AddScenesViewComponent', () => {
  let component: AddScenesViewComponent;
  let fixture: ComponentFixture<AddScenesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScenesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScenesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
