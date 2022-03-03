import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions  = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  // validate user
  registerUser(): Observable<boolean>{
    return this.httpClient.get<boolean>(`https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d`, httpOptions);
  }

  // get user dettails
  getUserProfile(): Observable<any> {
    return this.httpClient.get<boolean>(`https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2`, httpOptions);
  }
}
