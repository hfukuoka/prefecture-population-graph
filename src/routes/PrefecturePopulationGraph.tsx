import { useMemo } from "react";
import { usePrefecture } from "../hooks/usePrefecture";
import { PrefectureCheckList } from "../features/prefectures";
import { GraphArea } from "../features/graph";

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

  return loading ? (
    <></>
  ) : (
    <>
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
