import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'herum-circular-progress-bar',
  templateUrl: './herum-circular-progress-bar.component.html',
  styleUrls: ['./herum-circular-progress-bar.component.scss']
})
export class HerumCircularProgressBarComponent implements OnInit {

  @Input() percentage: number = 65;

  constructor() { }

  ngOnInit(): void {
  }

}
