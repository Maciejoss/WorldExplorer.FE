import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContinentsDataProviderService } from 'src/app/Services/ContinentsDataProvidingService';

@Component({
  selector: 'api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})

export class ApiFormComponent {

  @Output() SubmitForm = new EventEmitter<[String,String,Number]>();

  selectedOption = new FormControl('');
  selectedValue = 2;
  continentsDictionary:{[name:string]:String;}={}
  options: String[] = ['Loading Error, Please wait'];
  buttonEnabled:boolean = false;

  ngOnInit(): void {
    this.loadContinentsNames();
  }

  async loadContinentsNames(){
    let continentsDataProviderService = new ContinentsDataProviderService();
    let continents = await continentsDataProviderService.GetContinentsList();
    let options1:String[] =[];
    continents.forEach((c)=>{options1.push(c.Name);this.continentsDictionary[c.Name]=c.Code})
    this.options=options1;
  }

  async OnClick(){
    this.SubmitForm.emit([this.continentsDictionary[this.selectedOption.value!],this.selectedOption.value!,this.selectedValue]);
  }

  EnableButton(){
    this.buttonEnabled=true;
  }

}

