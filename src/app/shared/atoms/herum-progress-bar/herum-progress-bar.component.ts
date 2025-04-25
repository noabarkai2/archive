import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'herum-progress-bar',
  templateUrl: './herum-progress-bar.component.html',
  styleUrls: ['./herum-progress-bar.component.scss']
})
export class HerumProgressBarComponent implements OnInit {

  @Input() percentage: number = 65;
  @Input() showPercentage: boolean = true;
  @Input() type: 'gradient' | 'solid' = 'gradient';

  constructor() { }

  ngOnInit(): void {
  }

}