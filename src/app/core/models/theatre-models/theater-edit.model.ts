export class TheatreEditModel {

  public id: string = '';
  public name: string = '';
  public city: string = '';
  public street: string = '';
  public zipCode: string = '';
  public voivodeship: string = '';
  public country: string = '';
  public phoneNumber1: string = '';
  public phoneNumber2: string = '';


  constructor(id: string, name: string, city: string, street: string, zipCode: string, voivodeship: string, country: string, phoneNumber1: string, phoneNumber2: string) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.street = street;
    this.zipCode = zipCode;
    this.voivodeship = voivodeship;
    this.country = country;
    this.phoneNumber1 = phoneNumber1;
    this.phoneNumber2 = phoneNumber2;
  }
}
