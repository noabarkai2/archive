import { Component, Input, OnInit } from '@angular/core';
import { KeyValue } from 'src/app/homepage/tsObjects/userPersonalBasicData';

@Component({
  selector: 'key-value-list',
  templateUrl: './key-value-list.component.html',
  styleUrls: ['./key-value-list.component.scss']
})
export class KeyValueListComponent implements OnInit {

  @Input() items: KeyValue[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
