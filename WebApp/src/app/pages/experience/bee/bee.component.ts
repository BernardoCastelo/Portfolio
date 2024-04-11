import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date1 = new Date('2018-09-01');
  date2 = new Date('2019-11-01');
  date3 = new Date('2018-05-01');
  date4 = new Date('2018-09-01');
}
