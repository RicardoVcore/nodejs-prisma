import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  estimation?: IntNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
