import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableCreateSectionComponent } from './expandable-create-section.component';

describe('ExpandableCreateSectionComponent', () => {
  let component: ExpandableCreateSectionComponent;
  let fixture: ComponentFixture<ExpandableCreateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableCreateSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableCreateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
