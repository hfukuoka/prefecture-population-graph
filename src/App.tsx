import { GraphArea } from "./features/graph";
import { PrefectureCheckList } from "./features/prefectures";
import { usePrefecture } from "./hooks/usePrefecture";

function App() {
  // 初期化・State作成
  const {
    prefectureDict,
    prefectureIsChecked,
    setPrefectureIsChecked,
    populationCompositionDict,
    setPopulationCompositionDict,
  } = usePrefecture();

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
