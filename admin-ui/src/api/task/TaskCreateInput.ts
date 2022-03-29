import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  estimation?: number | null;
  location?: LocationWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
