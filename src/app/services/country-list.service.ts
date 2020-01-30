import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  constructor(private http: HttpClient) { }
  url='https://restcountries.eu/rest/v2/all'

  getCountry(){
    return this.http.get(this.url)
  }
  getCountryById(id){
    
    return this.http.get(`${this.url}/${id}`)
  }
}
