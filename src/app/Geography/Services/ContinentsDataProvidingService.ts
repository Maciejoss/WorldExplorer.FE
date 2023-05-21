import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { Continent } from "../Models/Continent";

export class ContinentsDataProviderService{

  private http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  private readonly url = 'https://localhost:7256/api/Continents';

  async GetContinentsList(): Promise<Array<Continent>>{
    let data = await this.http.get(this.url).toPromise();

    let Continents:Continent[]=[];

    (data as Object[]).forEach((element) => {
      Continents.push(new Continent(element));
    });

    return Continents;
  }

}
