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
        <h2>RESAS APIキー</h2>
      </div>
      <div>API呼び出しに使用するRESAS APIキーを指定します。</div>
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
