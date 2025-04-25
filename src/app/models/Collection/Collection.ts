import { CertificateLevel } from "../Enums/CertificateLevel";
import { GroupPreview } from "../Previews/GroupPreview";
import { ResourcePreview } from "../Previews/ResourcePreview";
import { UserPreview } from "../Previews/UserPreview";

export type Collection = {
  id?: string;
  name?: string;
  description?: string;
  creatingUser?: UserPreview;
  owners?: GroupPreview[]; 
  resources?: ResourcePreview[];
  isPublic?: boolean;
  lastUpdateTime?: Date;
  creationTime?: Date;
  certificateLevel?: CertificateLevel;
  isDelete?: boolean;
};
