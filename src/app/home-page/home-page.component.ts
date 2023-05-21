import { Component } from '@angular/core';
import { CoutnriesInfoProvidingSystem } from '../Geography/Services/CountriesInfoProvidingService';
import { Country } from '../Geography/Models/Country';

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

  pageState:PageState = PageState.InitialForm;
  countriesInfo:Country[] =[];

  async handleFormSubmit(eventData: [String, Number]){
    this.pageState = PageState.LoadingData;
    await this.LoadCountriesInfo(eventData[0],eventData[1]);
    this.pageState = PageState.DisplayCountriesInfo;;
  }

  async LoadCountriesInfo(continentCode:String, countriesCount:Number){
    let countriesInfoProvidingService = new CoutnriesInfoProvidingSystem();
    let countries = await countriesInfoProvidingService.GetContriesInfo(continentCode,countriesCount);
    this.countriesInfo = countries;
  }



}
