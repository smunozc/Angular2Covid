import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  @Input() countries: any[];

  constructor() { }

  ngOnInit(): void {
  }

  countrySelection(){
    
  }

}
