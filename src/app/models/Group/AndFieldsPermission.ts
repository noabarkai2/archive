import { Permission } from "../Shared/Permission"

export type AndFieldsPermission = {
    permission: Permission;
    fieldNameToValue: { [key: string]: string };
}