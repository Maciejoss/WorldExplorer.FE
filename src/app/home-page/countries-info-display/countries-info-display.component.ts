import { Component, Input } from '@angular/core';
import { Country } from 'src/app/Geography/Models/Country';

@Component({
  selector: 'countries-info-display',
  templateUrl: './countries-info-display.component.html',
  styleUrls: ['./countries-info-display.component.css']
})
export class CountriesInfoDisplayComponent {

  @Input()
  countries: Country[] = [];

}
