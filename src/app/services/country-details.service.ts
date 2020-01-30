import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  constructor(private http:HttpClient) { }
url='https://restcountries.eu/rest/v2/alpha'

getDetails(){
  return this.http.get(this.url)
  }
  // getCountryById(code:string){
  //   return this.http.get(`${this.url}/${code}`)
  // }
  getCountryById(id){
    return this.http.get(`${this.url}/${id}`)
  }
}
