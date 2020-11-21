import { Component, OnInit } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countriesInfo: any[];
  spainInfo: any;
  generalInfo: any;
  isCountries: boolean;
  
  constructor(private covidService: CovidService){ }

  ngOnInit(){
    this.isCountries = true;

    this.covidService.getCountries().subscribe(
      response => {
        this.countriesInfo = response;
      },
      error => {
        console.log(error);
      }
    );

    this.covidService.getGeneralInfo().subscribe(
      response => {
        this.generalInfo = response;
      },
      error => {
        console.log(error);
      }
    );

    this.covidService.getSpainInfo().subscribe(
      response => {
        let aux: any[];
        aux = response;
        this.spainInfo = aux[0];
      },
      error => {
        console.log(error);
      }
    );
  }

  allPressed(){
    this.isCountries = true;
  }

  globalPressed(){
    this.isCountries = false;
  }
}
