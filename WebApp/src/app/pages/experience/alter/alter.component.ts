import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class AlterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date1 = new Date('2019-12-01');
  date2 = new Date('2020-12-01');
  date3 = new Date('2020-05-01');
  date4 = new Date('2020-07-01');
  date5 = new Date('2020-05-01');
  date6 = new Date('2020-10-01');
}
