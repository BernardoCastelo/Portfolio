import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nixie',
  templateUrl: './nixie.component.html',
  styleUrls: ['./nixie.component.css']
})
export class NixieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date1 = new Date('2018-01-01');

}
