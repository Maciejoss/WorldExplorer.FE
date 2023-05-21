export class Continent{
  public Name:String;
  public Code:String;

  constructor(response:any) {
    this.Name = response.name;
    this.Code = response.code;
  }

}

