import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesInfoDisplayComponent } from './countries-info-display.component';

describe('CountriesInfoDisplayComponent', () => {
  let component: CountriesInfoDisplayComponent;
  let fixture: ComponentFixture<CountriesInfoDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesInfoDisplayComponent]
    });
    fixture = TestBed.createComponent(CountriesInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
