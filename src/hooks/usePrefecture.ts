import { useCallback, useContext, useEffect, useState } from "react";
import {
  PrefectureDict,
  PrefectureIsChecked,
  PrefecturesResponse,
  makePrefectureIsChecked,
  prefResponseToDict,
} from "../types/prefecture";
import axios, { AxiosError, AxiosResponse } from "axios";
import { PopulationCompositionDict } from "../types/population";
import { ResasApiKeyContext } from "../provider/ResasApiKey";

// 初期化処理
export const usePrefecture = () => {
  // 都道府県一覧
  const [prefectureDict, setPrefectureDict] = useState<PrefectureDict>({});
  const apiKey = useContext(ResasApiKeyContext);

  // チェックされているかを管理する変数
  const [prefectureIsChecked, setPrefectureIsChecked] =
    useState<PrefectureIsChecked>({});

  // すでに一度リクエストを送った都道府県の人口構成データ
  // 同じ都道府県の人口構成リクエストを何度も送らないために、クライアント側で人口構成データを管理
  const [populationCompositionDict, setPopulationCompositionDict] =
    useState<PopulationCompositionDict>({});

  const getPrefectures = useCallback(async () => {
    // 都道府県一覧リクエスト
    await axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: {
          "X-API-KEY": apiKey,
        },
      })
      .then((res: AxiosResponse<PrefecturesResponse>) => {
        const { data } = res;
        const transformedData = prefResponseToDict(data);

        // 変数初期化
        setPrefectureDict(transformedData);
        setPrefectureIsChecked(makePrefectureIsChecked(transformedData));
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message);
      });
  }, [setPrefectureDict, setPrefectureIsChecked, apiKey]);

  // 初回レンダリング時に都道府県一覧データの取得と各種変数の初期化
  useEffect(() => {
    void getPrefectures();
  }, [apiKey]);

  return {
    prefectureDict,
    prefectureIsChecked,
    setPrefectureIsChecked,
    populationCompositionDict,
    setPopulationCompositionDict,
  };
};
