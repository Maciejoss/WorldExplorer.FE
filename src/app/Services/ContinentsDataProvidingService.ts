import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { Continent } from "../Models/Continent";

export class ContinentsDataProviderService{

  private http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  private readonly _baseUrl = 'https://localhost:7256/api/Continents';

  async GetContinentsList(): Promise<Array<Continent>>{
    let data = await this.http.get(this._baseUrl).toPromise();

    let Continents:Continent[]=[];

    (data as Object[]).forEach((element) => {
      Continents.push(new Continent(element));
    });

    return Continents;
  }

}
