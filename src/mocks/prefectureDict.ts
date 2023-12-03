import { PrefectureDict, prefResponseToDict } from "../types/prefecture";
import { prefecturesResponse } from "./prefecturesResponse";

export const prefectureDict: PrefectureDict =
  prefResponseToDict(prefecturesResponse);
