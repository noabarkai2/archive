import { StructPreview } from "../Previews/StructPreview";
import { UserPreview } from "../Previews/UserPreview";
import { StructAssignment } from "./StructAssigment";

export type Struct = {
    id: string;
    name: string;
    description: string;
    owners: UserPreview[];
    assignments: StructAssignment[];
    parentStruct: StructPreview;
    childrenStructs: StructPreview[];
    militaryHierarchy: string;
    fullHierarchyName: string;
}