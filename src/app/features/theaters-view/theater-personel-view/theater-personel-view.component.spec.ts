import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterPersonelViewComponent } from './theater-personel-view.component';

describe('TheaterPersonelViewComponent', () => {
  let component: TheaterPersonelViewComponent;
  let fixture: ComponentFixture<TheaterPersonelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterPersonelViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheaterPersonelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
