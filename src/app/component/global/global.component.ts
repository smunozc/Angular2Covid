import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  @Input() spain: any;
  @Input() global: any;

  constructor() { }

  ngOnInit(): void {
  }

}
