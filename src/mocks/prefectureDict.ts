import { PrefectureDict, prefResponseToDict } from "../types/prefecture";
import { prefecturesResponse } from "./prefecturesResponse";

const prefectureDict: PrefectureDict = prefResponseToDict(prefecturesResponse);

export default prefectureDict;
