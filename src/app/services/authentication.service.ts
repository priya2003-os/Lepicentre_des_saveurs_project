import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public messager = new Subject<boolean>();
  public newsletter = new Subject<string>();

  constructor(private http: HttpClient) {}

  public registerUser(username: string, password: string) {
    return this.http.post(`${environment.baseUrl}/users/signup`, {
      username,
      password,
    });
  }

  public logUser(username: string, password: string) {
    const body = {
      username,
      password,
      //= ca ne fonctionne pas. Pourquoi? à rechercer*/
    };

    return this.http.post(`${environment.baseUrl}/users/login`, body);

    //console.log(this.http.post(`${environment.baseUrl}/users/login`, body));
  }

  public seConnecter(userInfo: Utilisateur) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
  public estConnecte() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public deconnecter() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
