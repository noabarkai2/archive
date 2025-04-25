import { Component, Input, OnInit } from '@angular/core';
import { SubscriptionStatus } from 'src/app/models/Enums/SubscriptionStatus';
import { ResourceSubscription } from 'src/app/models/User/ResourceSubscription';

export const resourcesIconPaths: { [key: string]: string } = {
  "pdf": "assets/icons/pdf.svg",
  "video": "assets/icons/video.svg",
  "presentation": "assets/icons/presentation.svg",
  "quiz": "assets/icons/audio.svg",
  "image": "assets/icons/image.svg",
  "text": "assets/icons/text.svg",
};

export const iconsBasePath = "assets/feed/icons/";

@Component({
  selector: 'feed-resource-item',
  templateUrl: './feed-resource-item.component.html',
  styleUrls: ['./feed-resource-item.component.scss']
})
export class FeedResourceItemComponent implements OnInit {

  @Input() resource!: ResourceSubscription;
  @Input() isActive: boolean = false;
  statusIconPath!: string;
  resourceTypeIconPath!: string;

  constructor() { }

  ngOnInit(): void {
    this.setResourceTypeIconPath();
    this.setStatusIconPath();
  }

  private setResourceTypeIconPath() {
    console.log(this.isActive);
    this.resourceTypeIconPath =  this.isActive ?
      iconsBasePath + 'active/' +this.resource.resourcePreview.resourceType + ".svg":
      iconsBasePath + 'inactive/' + this.resource.resourcePreview.resourceType + ".svg";
  }

  private setStatusIconPath(){
    switch(this.resource.subscriptionStatus){
      case SubscriptionStatus.Done:
        this.statusIconPath = iconsBasePath + 'status/done.svg';
        break;
      case SubscriptionStatus.InProgress:
        this.statusIconPath = iconsBasePath + 'status/inProgress.svg';
        break;
      default :
        this.statusIconPath = '';
        break;
    }
  }
}
