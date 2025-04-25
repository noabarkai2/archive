// src/app/feed/feed.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";

import { FeedLayoutComponent } from "./components/feed-layout/feed-layout.component";
import { CollectionsMenuLayoutComponent } from "./components/feed-layout/collections-menu-layout/collections-menu-layout.component";
import { CollectionMenuLayoutComponent } from "./components/feed-layout/collection-menu-layout/collection-menu-layout.component";
import { CommentsLayoutComponent } from "./components/feed-layout/comments-layout/comments-layout.component";
import { ResourceLayoutComponent } from "./components/feed-layout/resource-layout/resource-layout.component";
import { FeedResourceItemComponent } from "./components/molecules/feed-resource-item/feed-resource-item.component";
import { FeedResourceDescriptionComponent } from "./components/molecules/feed-resource-description/feed-resource-description.component";
import { FeedCommentItemComponent } from "./components/molecules/feed-comment-item/feed-comment-item.component";
import { FeedCollectionStatusItemComponent } from "./components/molecules/feed-collection-status-item/feed-collection-status-item.component";
import { FeedCollectionPriorityExpendablePanelComponent } from "./components/molecules/feed-collection-priority-expendable-panel/feed-collection-priority-expendable-panel.component";
import { FeedCommentsComponent } from "./components/molecules/feed-comment-item/feed-comments/feed-comments.component";
import { WideCollectionMenuComponent } from "./components/feed-layout/collection-menu-layout/wide-collection-menu/wide-collection-menu.component";
import { NarrowCollectionMenuComponent } from "./components/feed-layout/collection-menu-layout/narrow-collection-menu/narrow-collection-menu.component";

@NgModule({
  declarations: [
    FeedLayoutComponent,
    CollectionsMenuLayoutComponent,
    CollectionMenuLayoutComponent,
    CommentsLayoutComponent,
    ResourceLayoutComponent,
    FeedResourceItemComponent,
    FeedResourceDescriptionComponent,
    FeedCommentItemComponent,
    FeedCollectionStatusItemComponent,
    FeedCollectionPriorityExpendablePanelComponent,
    FeedCommentsComponent,
    WideCollectionMenuComponent,
    NarrowCollectionMenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTooltipModule,
  ],
})
export class FeedModule {}
