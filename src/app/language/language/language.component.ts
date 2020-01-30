import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from 'src/app/services/country-details.service';
import { CountryListService } from 'src/app/services/country-list.service';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
loading=false;
  alpha3Code: any;
  details:any
  countryId: any;
  languageName: string;
  nativeName: any;
  data1: any;
  languageData: any;
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
      this.loading=true;
      this.countryId=e
      this.countryService.getCountryById(e).subscribe((res:any)=>{
        this.languageData=res.languages
        for(let data of this.languageData){
        this.languageName=data.name
        this.nativeName=data.nativeName
        this.loading=false;
        }

    })
  }
  
}
