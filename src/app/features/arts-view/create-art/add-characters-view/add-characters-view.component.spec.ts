import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharactersViewComponent } from './add-characters-view.component';

describe('AddCharactersViewComponent', () => {
  let component: AddCharactersViewComponent;
  let fixture: ComponentFixture<AddCharactersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCharactersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCharactersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
