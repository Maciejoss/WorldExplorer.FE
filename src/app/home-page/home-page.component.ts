import { Component } from '@angular/core';
import { CoutnriesInfoProvidingSystem } from '../Services/CountriesInfoProvidingService';
import { Country } from '../Models/Country';

export enum PageState {
  InitialForm,
  LoadingData,
  DisplayCountriesInfo
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  public PageStateEnum = PageState;
  public continentName:String ="";

  pageState:PageState = PageState.InitialForm;
  countriesInfo:Country[] =[];

  async handleFormSubmit(eventData: [String,String, Number]){
    this.pageState = PageState.LoadingData;
    await this.LoadCountriesInfo(eventData[0],eventData[1],eventData[2]);
    this.pageState = PageState.DisplayCountriesInfo;;
  }

  async LoadCountriesInfo(continentCode:String,continentName:String, countriesCount:Number){
    this.continentName = continentName;
    let countriesInfoProvidingService = new CoutnriesInfoProvidingSystem();
    let countries = await countriesInfoProvidingService.GetContriesInfo(continentCode,countriesCount);
    this.countriesInfo = countries;
  }

  GoBackToForm(){
    this.pageState=PageState.InitialForm;
  }

}
