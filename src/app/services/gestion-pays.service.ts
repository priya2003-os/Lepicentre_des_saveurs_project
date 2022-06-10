import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Country } from '../models/country';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class GestionPaysService {
  constructor(private http: HttpClient, private router: Router) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`);
  }
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.baseUrl}/countries`);
  }

  getCountryById(countryId: string): Observable<Country> {
    console.log(countryId);

    return this.http.get<Country>(
      `${environment.baseUrl}/countries/${countryId}`
    );
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.baseUrl}/categories/all`);
  }

  createNewCountry(newCountry: Country) {
    const token = localStorage.getItem('token');
    console.log(newCountry);

    return this.http.post(
      `${environment.baseUrl}/countries/create-country`,
      newCountry,
      {
        headers: { Authorization: ` bearer ${token}` },
      }
    );
  }

  updateCountry(country: Country): Observable<any> {
    const token = localStorage.getItem('token');

    const body = {
      name: country.name,
      picture: country.picture,
      id: country.id,
    };
    return this.http.post<any>(
      `${environment.baseUrl}/countries/update`,
      body,
      {
        headers: { Authorization: `bearer ${token}` },
      }
    );
  }

  deleteCountry(country: Country): Observable<any> {
    const token = localStorage.getItem('token');

    // const body = {
    //   name: country.name,
    //   picture: country.picture,
    //   id: country.id,
    // };

    return this.http.post<any>(
      `${environment.baseUrl}/countries/delete`,
      country,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  updateProduct(product: Product) {
    const token = localStorage.getItem('token');

    return this.http.post<any>(
      `${environment.baseUrl}/products/update`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  deleteProduct(product: Product) {
    const token = localStorage.getItem('token');
    return this.http.post<any>(
      `${environment.baseUrl}/products/delete`,
      product,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }

  getProductByIdCountryAndIdCategory(
    countryId: string,
    categoryId: string
  ): Observable<Product> {
    const token = localStorage.getItem('token');
    console.log(countryId);
    console.log(categoryId);

    // const body = {
    //   countryId: Product[country_id]
    //   categoryId: product.category_id,
    // };

    return this.http.get<any>(
      `${environment.baseUrl}/products/by-product-country-category/${countryId}/${categoryId}`
    );
  }
}
