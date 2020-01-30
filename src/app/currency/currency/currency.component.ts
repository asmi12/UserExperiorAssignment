import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from 'src/app/services/country-details.service';
import { CountryListService } from 'src/app/services/country-list.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  loading=false
  alpha3Code: any;
  details:any
  countryId: any;
  languageName: string;
  nativeName: string;
  data1: any;
  currencyData: any;
  currenciesName: string;
  currenciesCode: any;
  currenciesSymbol: any;
    constructor(private countryService: CountryDetailsService ,private countryList: CountryListService) { }
  
    ngOnInit() {
     this.getCountryDetails();
    }
    
    getCountryDetails(){
      this.countryList.getCountry().subscribe(res=>{
        console.log(res);
        this.details=res
      })
    }
    onChange(e){
      this.loading=true
      this.countryId=e
      console.log(e)
      this.countryService.getCountryById(e).subscribe((res:any)=>{
     
        console.log(res)
        this.currencyData=res.currencies
        for(let data of this.currencyData){
        this.currenciesName=data.name
        console.log(data.name)
        this.currenciesCode=data.code
        this.currenciesSymbol=data.symbol
        this.loading=false
        }

    })
    
  }
  
}
