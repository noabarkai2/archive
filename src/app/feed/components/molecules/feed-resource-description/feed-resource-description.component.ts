import { Component, Input, OnInit } from '@angular/core';
import { Resource } from 'src/app/models/Resource/Resource';

@Component({
  selector: 'feed-resource-description',
  templateUrl: './feed-resource-description.component.html',
  styleUrls: ['./feed-resource-description.component.scss']
})
export class FeedResourceDescriptionComponent implements OnInit {

  @Input() resource!: Resource;

  constructor() { }

  ngOnInit(): void {
  }

}
