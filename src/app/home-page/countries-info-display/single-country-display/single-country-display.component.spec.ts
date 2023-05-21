import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCountryDisplayComponent } from './single-country-display.component';

describe('SingleCountryDisplayComponent', () => {
  let component: SingleCountryDisplayComponent;
  let fixture: ComponentFixture<SingleCountryDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCountryDisplayComponent]
    });
    fixture = TestBed.createComponent(SingleCountryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
