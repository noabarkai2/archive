import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'education-status-item',
  templateUrl: './education-status-item.component.html',
  styleUrls: ['./education-status-item.component.scss']
})
export class EducationStatusItemComponent implements OnInit {

  @Input() educationStatus!: EducationStatus;

  constructor() { }

  ngOnInit(): void {
  }

  get totalValueText(): string {
    return "מתוך " + this.educationStatus.total + " " + this.educationStatus.totalType;
  }

  _hexToRgb(hex:string) {
    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    return r + ',' + g + ',' + b;
  }

}

export type EducationStatus = {
  id: string;
  color: string;
  currentValue: number;
  type: string;
  total: number;
  totalType: string;
  iconPath: string;
};