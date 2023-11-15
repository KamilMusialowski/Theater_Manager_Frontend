import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignArtRolesComponent } from './assign-art-roles.component';

describe('AssignArtRolesComponent', () => {
  let component: AssignArtRolesComponent;
  let fixture: ComponentFixture<AssignArtRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignArtRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignArtRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
