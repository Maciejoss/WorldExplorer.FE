import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { Country } from "../Models/Country";

export class CoutnriesInfoProvidingSystem{
  private http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  private readonly _baseUrl = 'https://localhost:7256/api/Continents/';

  async GetContriesInfo(continentCode: String, countriesCount: Number){

    let url = this._baseUrl+continentCode+"/countries/"+countriesCount;
    let data = await this.http.get(url).toPromise();

    let countries :Country[] = [];
    (data as Object[]).forEach((element) => {
      countries.push(new Country(element));
    });

    return countries;
  }
}
