import { PrefectureCheckList } from "./features/prefectures";
import { usePrefecture } from "./hooks/usePrefecture";

function App() {
  // 初期化・State作成
  const { prefectureDict } = usePrefecture();
  return (
    <div className="App">
      <h1>都道府県人口グラフ</h1>
      <PrefectureCheckList prefectureDict={prefectureDict} />
    </div>
  );
}

export default App;
