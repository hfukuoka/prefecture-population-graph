import { GraphArea } from "../features/graph";
import { PrefectureCheckList } from "../features/prefectures";
import { usePrefecture } from "../hooks/usePrefecture";
import { ApiKeyInputPage } from "./ApiKeyInputPage";

export const PrefecturePopulationPage = () => {
  // 初期化・State作成
  const {
    prefectureDict,
    prefectureIsChecked,
    setPrefectureIsChecked,
    populationCompositionDict,
    setPopulationCompositionDict,
  } = usePrefecture();

  return (
    <div>
      <h1>都道府県人口グラフ</h1>
      <ApiKeyInputPage />
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
    </div>
  );
};
