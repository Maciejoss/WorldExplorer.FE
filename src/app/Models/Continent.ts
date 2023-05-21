export class Continent{
  public Name:string;
  public Code:string;

  constructor(response:any) {
    this.Name = response.name;
    this.Code = response.code;
  }

}

