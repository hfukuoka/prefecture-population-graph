import Highcharts from "highcharts";
import {
  PopulationCompositionDict,
  PopulationLabel,
} from "../../../types/population";
import { PrefectureDict, PrefectureIsChecked } from "../../../types/prefecture";

// 実際にオプションを計算する関数
export const makeHighChartsOptions = (
  label: PopulationLabel | null,
  prefectureIsChecked: PrefectureIsChecked,
  populationCompositionDict: PopulationCompositionDict,
  prefectureDict: PrefectureDict,
) => {
  const categories: string[] = ["1980", "1985", "1990"];
  const series: Highcharts.SeriesOptionsType[] = [
    { type: "line", name: "北海道", data: [2906, 2769, 2346] },
  ];

  // グラフ用オプション
  const options: Highcharts.Options = {
    title: {
      text: label ? String(label) : "",
    },
    xAxis: {
      title: {
        text: "年",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人",
      },
    },
    series: series,
  };

  return options;
};
