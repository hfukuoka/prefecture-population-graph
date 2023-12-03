import { useState } from "react";
import {
  PopulationCompositionDict,
  PopulationLabel,
} from "../../../types/population";
import { PrefectureDict, PrefectureIsChecked } from "../../../types/prefecture";
import { makeHighChartsOptions } from "../utils/makehighChartsOptions";
import { allFalsePrefectureIsChecked } from "../../../mocks/allFalsePrefectureIsChecked";
import { populationCompositionDict11Only } from "../../../mocks/populationCompositionDict11Only";
import prefectureDict_ from "../../../mocks/prefectureDict";

export type UseChartsOptionsPayload = {
  prefectureIsChecked: PrefectureIsChecked;
  populationCompositionDict: PopulationCompositionDict;
  prefectureDict: PrefectureDict;
};

// グラフ用オプション作成。
export const useChartsOptions = (
  prefectureIsChecked: PrefectureIsChecked,
  populationCompositionDict: PopulationCompositionDict,
  prefectureDict: PrefectureDict,
) => {
  // ラベル
  // セレクトボックスで状態操作を行う
  // 現時点では総人口で固定
  const [populationLabel, setPopulationLabel] =
    useState<PopulationLabel | null>("総人口");

  // ダミーデータ
  allFalsePrefectureIsChecked[11] = true;
  const prefectureIsCheckedDummy = allFalsePrefectureIsChecked;
  const populationCompositionDictDummy = populationCompositionDict11Only;
  const prefectureDictDummy = prefectureDict_;

  // グラフ作成にはラベル・選択都道府県・人口構成のデータ・都道府県コードと都道府県名の対応が必要
  // 現時点ではダミーデータ使用
  // const options = makeHighChartsOptions(
  //   populationLabel,
  //   prefectureIsChecked,
  //   populationCompositionDict,
  //   prefectureDict,
  // );
  const options = makeHighChartsOptions(
    populationLabel,
    prefectureIsCheckedDummy,
    populationCompositionDictDummy,
    prefectureDictDummy,
  );

  return {
    options,
    setPopulationLabel,
  };
};
