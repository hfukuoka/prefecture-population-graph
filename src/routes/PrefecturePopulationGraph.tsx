import { useMemo } from "react";
import { usePrefecture } from "../hooks/usePrefecture";
import { PrefectureCheckList } from "../features/prefectures";
import { GraphArea } from "../features/graph";
import "../styles/prefecturePopulation.scss";
import { Loading } from "../features/loading";

export const PrefecturePopulationGraph = () => {
  // 初期化・State作成
  const {
    prefectureDict,
    prefectureIsChecked,
    setPrefectureIsChecked,
    populationCompositionDict,
    setPopulationCompositionDict,
  } = usePrefecture();

  // 都道府県一覧リクエストが返ってきているか
  const loading: boolean = useMemo(() => {
    return Object.keys(prefectureDict).length === 0;
  }, [prefectureDict]);

  // ローディング中かどうかで場合分け
  return loading ? (
    <Loading />
  ) : (
    <>
      <h1>都道府県人口グラフ</h1>
      <PrefectureCheckList
        prefectureDict={prefectureDict}
        setPrefectureIsChecked={setPrefectureIsChecked}
        populationCompositionDict={populationCompositionDict}
        setPopulationCompositionDict={setPopulationCompositionDict}
      />
      <GraphArea
        prefectureIsChecked={prefectureIsChecked}
        populationCompositionDict={populationCompositionDict}
        prefectureDict={prefectureDict}
      />
    </>
  );
};
