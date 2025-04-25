import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeedPriority, priorityDisplayNames } from 'src/app/models/Enums/FeedPriority';
import { CollectionSubscription } from 'src/app/models/User/CollectionSubscription';

@Component({
  selector: 'app-collections-menu-layout',
  templateUrl: './collections-menu-layout.component.html',
  styleUrls: ['./collections-menu-layout.component.scss'],
})
export class CollectionsMenuLayoutComponent implements OnInit {

  @Input() subscribedCollections!: CollectionSubscription[];
  @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();
  @Output() onChooseCollection: EventEmitter<CollectionSubscription> = new EventEmitter<CollectionSubscription>();

  collectionsByPriority!: CollectionPriority[];

  constructor() {}

  ngOnInit(): void {
    this.collectionsByPriority = this.splitByPriority(this.subscribedCollections);
  }

  onCloseMenu() {
    this.closeMenu.emit();
  }

  _onChooseCollection(selectedCollection: CollectionSubscription){
    this.onChooseCollection.emit(selectedCollection);
  }

  private splitByPriority(
    subscribedCollections: CollectionSubscription[]
  ): CollectionPriority[] {
    const result: CollectionPriority[] = [];

    subscribedCollections.forEach((collection) => {
      const existingPriority = result.find(
        (item) => item.priority === collection.feedPriority
      );

      if (existingPriority) {
        existingPriority.collections.push(collection);
      } else {
        result.push({
          displayName: priorityDisplayNames[collection.feedPriority],
          priority: collection.feedPriority,
          collections: [collection],
        });
      }
    });

    return result.sort((a, b) => b.priority - a.priority);
  }
}

export type CollectionPriority = {
  displayName: string;
  priority: FeedPriority;
  collections: CollectionSubscription[];
};