import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  getCountries(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(result => {
      return result["Countries"];
    }));
  }

  getGeneralInfo(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(res => {
      return res["Global"];
    }));
  }

  getSpainInfo(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(result => {
      return result["Countries"].filter(spain => {
        return spain.Country === 'Spain';
      });
    }));
  }

}
