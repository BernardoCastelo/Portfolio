import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ankix',
  templateUrl: './ankix.component.html',
  styleUrls: ['./ankix.component.css']
})
export class AnkixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date1 = new Date('2020-12-01');
  date2 = new Date('2021-11-01');

}
