import { FeedPriority } from "../Enums/FeedPriority";
import { SubscriptionStatus } from "../Enums/SubscriptionStatus";
import { CollectionPreview } from "../Previews/CollectionPreview"
import { ResourceSubscription } from "./ResourceSubscription";

export type CollectionSubscription = {
    collectionPreview: CollectionPreview;
    resourceSubscriptions: ResourceSubscription[];
    subscriptionStatus: SubscriptionStatus;
    feedPriority: FeedPriority;
    subscriptionTime: Date;
    lastActivityTime: Date;
    grade: number;
}