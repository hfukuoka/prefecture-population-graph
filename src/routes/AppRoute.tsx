import { useContext } from "react";
import { ApiKeyInput } from "../features/apiKeyInput";
import { ResasApiKeyContext } from "../provider/ResasApiKey";
import { PrefecturePopulationGraph } from "./PrefecturePopulationGraph";

export const AppRoute = () => {
  const apiKey = useContext(ResasApiKeyContext);

  // apiキーを入力したかどうかで場合分け
  return (
    <div>
      <h1>都道府県人口グラフ</h1>
      {apiKey ? <PrefecturePopulationGraph /> : <ApiKeyInput />}
    </div>
  );
};
