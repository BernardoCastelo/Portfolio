import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photomanager',
  templateUrl: './photomanager.component.html',
  styleUrls: ['./photomanager.component.css']
})
export class PhotomanagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date1 = new Date('2020-01-01');

}
