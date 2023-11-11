import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsViewComponent } from './arts-view.component';

describe('ArtsViewComponent', () => {
  let component: ArtsViewComponent;
  let fixture: ComponentFixture<ArtsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
