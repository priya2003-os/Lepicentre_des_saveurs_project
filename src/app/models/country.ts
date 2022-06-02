export class Country {
  id?: string;
  name: string;
  picture: string;

  constructor(paramName: string, paramPicture: string) {
    this.name = paramName;
    this.picture = paramPicture;
  }
}
