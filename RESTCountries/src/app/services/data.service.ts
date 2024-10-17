import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../models/ICountry';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  displayAllCountries(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>("https://restcountries.com/v3.1/all")
  }

  getCountryByName(name: string): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>(`https://restcountries.com/v3.1/name/${name}`)
  }

}
