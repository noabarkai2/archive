import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feed-collection-status-item',
  templateUrl: './feed-collection-status-item.component.html',
  styleUrls: ['./feed-collection-status-item.component.scss']
})
export class FeedCollectionStatusItemComponent implements OnInit {

  @Input() title:string = '';
  @Input() percentage:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
