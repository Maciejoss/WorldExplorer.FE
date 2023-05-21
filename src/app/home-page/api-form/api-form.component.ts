import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent {
  selectedOption = new FormControl('');
  selectedValue = 2;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

}
