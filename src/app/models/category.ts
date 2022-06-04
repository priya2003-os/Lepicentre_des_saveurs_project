export class Category {
  id?: string;
  name: string;
  picture: string;

  constructor(paramName: string, paramPicture: string) {
    this.name = paramName;
    this.picture = paramPicture;
  }
}
