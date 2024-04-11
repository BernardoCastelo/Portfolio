import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input({ required: true }) start!: Date;
  @Input() end?: Date;

  constructor() { }

  ngOnInit(): void {
  }

  dateFormat = 'MMMM YYYY'
}
