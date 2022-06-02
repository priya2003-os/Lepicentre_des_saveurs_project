import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class GestionPaysService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Country> {
    const token = localStorage.getItem('token');

    return this.http.get<Country>(`${environment.baseUrl}(/lienVerspays)`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  getAllCountries(): Observable<Country[]> {
    const token = localStorage.getItem('token');

    return this.http.get<Country[]>(`${environment.baseUrl}/countries`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getCountryById(countryId: string): Observable<Country> {
    const token = localStorage.getItem('token');
    console.log(countryId);

    return this.http.get<Country>(
      `${environment.baseUrl}/countries/${countryId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }

  getAllCategories(): Observable<Category[]> {
    const token = localStorage.getItem('token');

    return this.http.get<Category[]>(`${environment.baseUrl}/categories/all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
}