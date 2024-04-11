import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equus',
  templateUrl: './equus.component.html',
  styleUrls: ['./equus.component.css']
})
export class EquusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date1 = new Date('2021-11-01');
  date2 = new Date('2023-03-01');
}
