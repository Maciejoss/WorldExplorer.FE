export class Country{
  public Name:Name;

  constructor(response:any) {
    this.Name = new Name(response.name);
  }

}

export class Name{
  public Common:String;
  public Official:String;
  constructor(response:any){
    this.Common = response.common;
    this.Official = response.official;
  }
}
