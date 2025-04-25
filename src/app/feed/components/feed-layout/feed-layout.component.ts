import { Component, OnInit } from '@angular/core';
import { CollectionSubscription } from 'src/app/models/User/CollectionSubscription';
import { User } from 'src/app/models/User/User';
import { usersExample } from './ObjectExample/UsersExample';
import { ResourceSubscription } from 'src/app/models/User/ResourceSubscription';
import { Resource } from 'src/app/models/Resource/Resource';
import { ResourceExample } from './ObjectExample/ResourceExample';

@Component({
  selector: 'app-feed-layout',
  templateUrl: './feed-layout.component.html',
  styleUrls: ['./feed-layout.component.scss']
})
export class FeedLayoutComponent implements OnInit {

  selectedCollectionSubscription!: CollectionSubscription;
  selectedResourceSubscription!: ResourceSubscription;
  selectedResource!: Resource;
  userCollections: User = usersExample[0];
  isWideMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.selectCollection();
  }
  
  selectCollection() {
    console.log("TODO: write chooseCollection again by buisness logic")
    this.selectedCollectionSubscription = this.userCollections.subscribedCollections[0];
    this.selectResource()
  }

  selectResource() {
    console.log("TODO: write chooseResource again by buisness logic");
    this.selectedResourceSubscription = this.selectedCollectionSubscription.resourceSubscriptions[0];
  }

  _onSelectCollection(selectedCollection: CollectionSubscription) {
    this.selectedCollectionSubscription = selectedCollection;
    this.selectResource()
  }

  _onSelectResource(resource: ResourceSubscription) {
    console.log("TODO: write _onSelectResource again by buisness logic")

    this.selectedResource = this.getResourceById(resource.resourcePreview.id)
  }

  private getResourceById(id: string){
    return ResourceExample;
  }
}