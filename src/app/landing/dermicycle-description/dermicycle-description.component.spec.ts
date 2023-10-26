import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermicycleDescriptionComponent } from './dermicycle-description.component';

describe('DermicycleDescriptionComponent', () => {
  let component: DermicycleDescriptionComponent;
  let fixture: ComponentFixture<DermicycleDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DermicycleDescriptionComponent]
    });
    fixture = TestBed.createComponent(DermicycleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
