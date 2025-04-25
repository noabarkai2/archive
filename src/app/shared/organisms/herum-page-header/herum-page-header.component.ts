import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'herum-page-header',
  templateUrl: './herum-page-header.component.html',
  styleUrls: ['./herum-page-header.component.scss']
})
export class HerumPageHeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';

  isClosedButtonClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}