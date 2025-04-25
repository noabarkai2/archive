import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-herum-user-progress',
  templateUrl: './herum-user-progress.component.html',
  styleUrls: ['./herum-user-progress.component.scss']
})
export class HerumUserProgressComponent implements OnInit {

  @Input() title: string = 'מדד כשירות כללי';
  @Input() percentage: number = 65;
  @Input() type: 'gradient' | 'solid' = 'gradient';

  constructor() { }

  ngOnInit(): void {
  }

}
