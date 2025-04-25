import { Component, OnInit,Input } from '@angular/core';
import { CollectionSubscription } from 'src/app/models/User/CollectionSubscription';

@Component({
  selector: 'collection-horizontal-overview',
  templateUrl: './collection-horizontal-overview.component.html',
  styleUrls: ['./collection-horizontal-overview.component.scss']
})
export class CollectionHorizontalOverviewComponent implements OnInit {

  @Input() collectionSubscription!: CollectionSubscription;

  constructor() { }

  ngOnInit(): void {
  }

}
