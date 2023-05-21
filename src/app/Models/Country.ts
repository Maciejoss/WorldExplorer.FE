export class Country {
  public OfficialName?: String;
  public Capital?: String;
  public Population?: Number;
  public Currencies?: Currency[];
  public Subregion?: String;
  public Languages?: String[];

  constructor(json: any) {
    this.OfficialName = json.officialName;
    this.Capital = json.capital;
    this.Population = json.population;
    this.Currencies = [];
    json.currencies?.forEach((c:any)=>{this.Currencies?.push(new Currency(c))});
    this.Subregion = json.subregion;
    this.Languages = json.languages;
  }
}

export class Currency{
  public Name?:String;
  public Symbol?:String;
  constructor(json: any) {
    this.Name = json.name;
    this.Symbol = json.symbol;
  }
}


