import { useState } from "react";
import {
  PopulationCompositionDict,
  PopulationLabel,
} from "../../../types/population";
import { makeHighChartsOptions } from "../utils/makehighChartsOptions";
import { PrefectureDict, PrefectureIsChecked } from "../../../types/prefecture";

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

  // グラフ作成にはラベル・選択都道府県・人口構成のデータ・都道府県コードと都道府県名の対応が必要
  // 現時点ではダミーデータ使用
  const options = makeHighChartsOptions(
    populationLabel,
    prefectureIsChecked,
    populationCompositionDict,
    prefectureDict,
  );

  return {
    options,
    setPopulationLabel,
  };
};
