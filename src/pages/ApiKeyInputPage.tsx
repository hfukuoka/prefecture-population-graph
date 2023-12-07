import { useCallback, useState, useContext } from "react";
import { SetResasApiKeyContext } from "../provider/ResasApiKey";
import { useNavigate } from "react-router-dom";
import { route } from "../routes/route";

export const ApiKeyInputPage = () => {
  const [apiKeyInput, setApiKeyInput] = useState(""); // コンポーネント内のみのapiキーのstate
  const setApiKey = useContext(SetResasApiKeyContext); // コンテキストとしてapiキー情報を保持
  const navigate = useNavigate();

  // 利用開始ボタン押下時の処理
  // apiキーをcontextに格納し、都道府県人口グラフのページに遷移する
  const handleSubmit = useCallback(() => {
    setApiKey(apiKeyInput);
    navigate(route.prefecturePopulationPage);
  }, [apiKeyInput, navigate, route]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>RESAS APIキー</h2>
        </div>
        <div>API呼び出しに使用するRESAS APIキーを指定します。</div>
        <div>
          <input
            type="password"
            placeholder="RESAS-APIキー"
            value={apiKeyInput}
            required
            onChange={(e) => setApiKeyInput(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="利用開始" />
        </div>
      </form>
    </div>
  );
};
