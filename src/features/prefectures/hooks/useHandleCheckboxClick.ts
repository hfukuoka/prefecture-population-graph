import { useCallback } from "react";
import {
  PopulationCompositionDict,
  PopulationCompositionResponse,
} from "../../../types/population";
import { Prefecture, PrefectureIsChecked } from "../../../types/prefecture";
import { AxiosError, AxiosResponse } from "axios";
import axios from "axios";

// handleCheckboxClickのロジックを作成
export const useHandleCheckboxClick = (
  setPrefectureIsChecked: React.Dispatch<
    React.SetStateAction<PrefectureIsChecked>
  >,
  populationCompositionDict: PopulationCompositionDict,
  setPopulationCompositionDict: React.Dispatch<
    React.SetStateAction<PopulationCompositionDict>
  >,
) => {
  // useCallbackで関数メモ化
  // 人口構成辞書のStateが変わったときだけ関数を更新
  const handleCheckboxClick = useCallback(
    (prefecture: Prefecture) => {
      // チェックステータス更新
      setPrefectureIsChecked((pre) => {
        const next = { ...pre };
        next[prefecture.prefCode] = !pre[prefecture.prefCode];
        return next;
      });

      // 該当都道府県の人口構成データがGET済みかどうか確認
      // データが空または該当データがない時
      if (!(prefecture.prefCode in populationCompositionDict)) {
        // 実際に該当都道府県の人口構成データをGET
        axios
          .get(
            "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
            {
              params: { cityCode: "-", prefCode: prefecture.prefCode },
              headers: {
                "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY,
              },
            },
          )
          .then((res: AxiosResponse<PopulationCompositionResponse>) => {
            const { data } = res;
            // 人口構成辞書のState更新
            setPopulationCompositionDict((pre) => {
              const next = { ...pre };
              next[prefecture.prefCode] = data.result;
              return next;
            });
          })
          .catch((e: AxiosError<{ error: string }>) => {
            console.log(e);
          });
      }
    },
    [populationCompositionDict, setPopulationCompositionDict],
  );
  return handleCheckboxClick;
};
