import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContinentsDataProviderService } from 'src/app/Geography/Services/ContinentsDataProvidingService';
import { CoutnriesInfoProvidingSystem } from 'src/app/Geography/Services/CountriesInfoProvidingService';

@Component({
  selector: 'api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})

export class ApiFormComponent {

  @Output() SubmitForm = new EventEmitter<[String,Number]>();

  selectedOption = new FormControl('');
  selectedValue = 2;
  options: String[] = ['Loading Error, Please wait'];

  ngOnInit(): void {
    this.loadContinentsNames();
  }

  async loadContinentsNames(){
    let continentsDataProviderService = new ContinentsDataProviderService();
    let continents = await continentsDataProviderService.GetContinentsList();
    let options1:String[] =[];
    continents.forEach((c)=>{options1.push(c.Code)})
    this.options=options1;
  }

  async OnClick(){
    this.SubmitForm.emit([this.selectedOption.value!,this.selectedValue]);
  }

}

