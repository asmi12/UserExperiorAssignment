import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from 'src/app/services/country-details.service';
import { CountryListService } from 'src/app/services/country-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loading=false;
  alpha3Code: any;
details=[];
  select: any;
  countryId: any;
  data: any;
  countryLst:any=[]
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  constructor(private countryService: CountryDetailsService,private country:CountryListService) { }


  ngOnInit() {
  this.country.getCountry().subscribe(res=>{
    this.countryLst=res
  })
  }

  onChange(e){
    this.loading=true
    this.countryId=e
    this.countryService.getCountryById(e).subscribe((res:any)=>{
      this.name=res.name
      this.capital=res.capital
      this.region=res.region
      this.subregion=res.subregion
      this.population=res.population
      this.area=res.area
      this.alpha3Code=res.alpha3Code
      this.loading=false
    })
  }

}

