import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInteriorComponent } from './people-interior.component';

describe('PeopleInteriorComponent', () => {
  let component: PeopleInteriorComponent;
  let fixture: ComponentFixture<PeopleInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleInteriorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
