import { SubscriptionStatus } from "../Enums/SubscriptionStatus";
import { ResourcePreview } from "../Previews/ResourcePreview"

export type ResourceSubscription = {
    resourcePreview: ResourcePreview;
    positionInCollection: number;
    subscriptionStatus: SubscriptionStatus;
    lastActivityTime:Date;
    grade:number;
}