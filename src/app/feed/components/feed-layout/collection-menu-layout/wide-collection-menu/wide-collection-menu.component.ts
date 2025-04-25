import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CollectionSubscription } from 'src/app/models/User/CollectionSubscription';
import { ResourceSubscription } from 'src/app/models/User/ResourceSubscription';
import * as _ from 'lodash';

@Component({
  selector: 'wide-collection-menu',
  templateUrl: './wide-collection-menu.component.html',
  styleUrls: ['./wide-collection-menu.component.scss'],
})
export class WideCollectionMenuComponent implements OnChanges {

  @Input() selectedCollection!: CollectionSubscription;
  @Input() selectedResourceInput!: ResourceSubscription;
  @Output() onSelectResource = new EventEmitter<ResourceSubscription>();

  selectedResource!: ResourceSubscription;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedResourceInput']) {
      console.log('WideCollectionMenuComponent:', changes['selectedResourceInput'].currentValue);
      this.selectedResource = _.cloneDeep(changes['selectedResourceInput'].currentValue);
    }
  }

  _onSelectResource(resource: ResourceSubscription) {
    this.selectedResource = _.cloneDeep(resource);
    this.onSelectResource.emit(_.cloneDeep(this.selectedResource));
  }
}