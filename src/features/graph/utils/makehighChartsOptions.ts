import Highcharts from "highcharts";
import {
  PopulationComposition,
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
  const series: Highcharts.SeriesOptionsType[] = []; // 複数のy軸データ列とその表示設定
  const categories: string[] = []; // x軸データ列
  let isFirst = true; // x軸データを作成するための初回ループ判定フラグ
  if (!prefectureIsChecked || !populationCompositionDict || !prefectureDict)
    return {};

  for (const [key, value] of Object.entries(prefectureIsChecked)) {
    // Object.entries()をするとkeyがstring、valueがanyになってしまうため型確認とキャストを行う
    if (typeof value === "boolean") {
      const id: number = Number(key);
      const isChecked: boolean = prefectureIsChecked[id];

      //チェックされた都道府県のみ
      // 都道府県一覧リクエストが返ってくる前だと変数が未定義の可能性があるので確認
      if (
        isChecked &&
        prefectureDict &&
        id in prefectureDict &&
        populationCompositionDict &&
        id in populationCompositionDict
      ) {
        const prefName: string = prefectureDict[id].prefName;
        const populationComposition: PopulationComposition =
          populationCompositionDict[id];
        // 全てのラベル（総人口、年少人口等）を見て、今回表示すべきものだけデータに入れる
        for (const allLabelData of populationComposition.data) {
          // 欲しいラベルか判定
          if (allLabelData.label === label) {
            // y軸データ列格納変数
            const allYearPopulationDatas: number[] = [];
            // 各年ループ
            for (const data of allLabelData.data) {
              if (isFirst) categories.push(String(data.year)); // 最初の都道府県からx軸データ（年）を作成
              allYearPopulationDatas.push(data.value);
            }
            // seriesにy軸データ列追加
            series.push({
              type: "line",
              name: prefName,
              data: allYearPopulationDatas,
            });
            // 一度x軸データを作成したのでフラグを更新
            if (isFirst) isFirst = false;
          }
        }
      }
    }
  }

  // グラフ用オプション
  const options: Highcharts.Options = {
    accessibility: {
      enabled: false,
    },
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
