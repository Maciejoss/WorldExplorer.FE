import { Component, Input } from '@angular/core';
import { Country } from 'src/app/Models/Country';

@Component({
  selector: 'single-country-display',
  templateUrl: './single-country-display.component.html',
  styleUrls: ['./single-country-display.component.css']
})
export class SingleCountryDisplayComponent {

  @Input()
  country!: Country;
}
