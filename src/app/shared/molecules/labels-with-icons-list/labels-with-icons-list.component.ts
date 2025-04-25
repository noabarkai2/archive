import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'labels-with-icons-list',
  templateUrl: './labels-with-icons-list.component.html',
  styleUrls: ['./labels-with-icons-list.component.scss']
})
export class LabelsWithIconsListComponent implements OnInit {

  @Input() items: { iconPath: string, label: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
