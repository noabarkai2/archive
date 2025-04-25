import { StructPreview } from "../Previews/StructPreview";
import { Permission } from "../Shared/Permission";

export type StructPermission = {
    struct: StructPreview;
    permission: Permission;
}