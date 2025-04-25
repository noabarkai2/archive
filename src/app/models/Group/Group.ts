import { CollectionPreview } from "../Previews/CollectionPreview";
import { UserPreview } from "../Previews/UserPreview";
import { AndFieldsPermission } from "./AndFieldsPermission";
import { StructPermission } from "./StructPermission";

export type Group = {
    id: string;
    name: string;
    description: string;
    structPermissions: StructPermission[];
    members: UserPreview[];
    fieldsPermissions: AndFieldsPermission[];
    ownedCollections: CollectionPreview;
}