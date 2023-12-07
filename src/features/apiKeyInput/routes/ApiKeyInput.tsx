import { useCallback, useState, useContext } from "react";
import { SetResasApiKeyContext } from "../../../provider/ResasApiKey";

export const ApiKeyInputPage = () => {
  const [apiKeyInput, setApiKeyInput] = useState(""); // コンポーネント内のみのapiキーのstate
  const setApiKey = useContext(SetResasApiKeyContext); // コンテキストとしてapiキー情報を保持

  // 利用開始ボタン押下時の処理
  // apiキーをcontextに格納する
  const handleSubmit = useCallback(() => {
    setApiKey(apiKeyInput);
  }, [apiKeyInput]);

  return (
    <div>
      <div>
        <a href="https://opendata.resas-portal.go.jp/">RESAS API</a>
        キーを入力してください。
      </div>
      <div>
        <input
          type="password"
          placeholder="RESAS APIキー"
          value={apiKeyInput}
          required
          onChange={(e) => setApiKeyInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>利用開始</button>
      </div>
    </div>
  );
};
