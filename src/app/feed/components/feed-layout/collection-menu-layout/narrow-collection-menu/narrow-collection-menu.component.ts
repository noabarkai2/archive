import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CollectionSubscription } from 'src/app/models/User/CollectionSubscription';
import { ResourceSubscription } from 'src/app/models/User/ResourceSubscription';
import * as _ from 'lodash';

@Component({
  selector: 'narrow-collection-menu',
  templateUrl: './narrow-collection-menu.component.html',
  styleUrls: ['./narrow-collection-menu.component.scss']
})
export class NarrowCollectionMenuComponent implements OnInit, OnChanges {

  @Input() selectedCollection!: CollectionSubscription;
  @Input() selectedResourceInput!: ResourceSubscription;
  @Output() onSelectResource = new EventEmitter<ResourceSubscription>();

  selectedResource!: ResourceSubscription;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedResourceInput']) {
      this.selectedResource = _.cloneDeep(changes['selectedResourceInput'].currentValue);
    }
    console.log('NarrowCollectionMenuComponent');
  }

  ngOnInit(): void {
  }

  _onSelectResource(resource: ResourceSubscription) {
    this.selectedResource = _.cloneDeep(resource);
    this.onSelectResource.emit(_.cloneDeep(this.selectedResource));
  }
}
