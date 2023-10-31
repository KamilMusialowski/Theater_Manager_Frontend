import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersViewComponent } from './theaters-view.component';

describe('TheatersViewComponent', () => {
  let component: TheatersViewComponent;
  let fixture: ComponentFixture<TheatersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
