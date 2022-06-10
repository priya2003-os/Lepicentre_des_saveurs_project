export class Product {
  id?: string;
  name: string;
  description: string;
  picture: string;
  price: string;
  country_id?: string;
  brand_id?: string;
  category_id?: string;

  constructor(
    paramName: string,
    paramDescrption: string,
    paramPicture: string,
    paramPrice: string
  ) {
    this.name = paramName;
    this.description = paramDescrption;
    this.picture = paramPicture;
    this.price = paramPrice;
  }
}
