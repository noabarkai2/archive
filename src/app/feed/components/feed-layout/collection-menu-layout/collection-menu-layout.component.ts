import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CollectionSubscription } from 'src/app/models/User/CollectionSubscription';
import { ResourceSubscription } from 'src/app/models/User/ResourceSubscription';
import * as _ from 'lodash';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-collection-menu-layout',
  templateUrl: './collection-menu-layout.component.html',
  styleUrls: ['./collection-menu-layout.component.scss'],
})
export class CollectionMenuLayoutComponent implements OnChanges {

  @Input() selectedCollection!: CollectionSubscription;
  @Input() selectedResourceInput!: ResourceSubscription;
  @Input() isWideMode: boolean = false;
  @Output() onSelectResource = new EventEmitter<ResourceSubscription>();

  selectedResource!: ResourceSubscription;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedResourceInput']) {
      this.selectedResource = _.cloneDeep(changes['selectedResourceInput'].currentValue);
    }
  }

  _onSelectResource(resource: ResourceSubscription) {
    console.log('CollectionMenuLayoutComponent', this.selectedResource);
    this.selectedResource = _.cloneDeep(resource);
    this.onSelectResource.emit(_.cloneDeep(this.selectedResource));
  }
}

