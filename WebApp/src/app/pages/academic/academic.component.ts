import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date1 = new Date('2012-11-01');
  date2 = new Date('2018-03-01');

  date3 = new Date('2017-03-01');
  date4 = new Date('2017-09-01');

  date5 = new Date('2017-05-01');
  date6 = new Date('2017-06-01');

  date7 = new Date('2021-07-01');
  date8 = new Date('2020-09-01');
  date9 = new Date('2020-08-01');
  date10 = new Date('2018-08-01');
}
