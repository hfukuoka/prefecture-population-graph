# Prefecture Population Graph

RESAS APIを用いて都道府県別人口構成グラフを表示するWebアプリ

## セットアップ

node18を想定

```yarn install```

### テスト用環境変数の設定

本アプリではユーザーがブラウザ上でAPIキーを手入力する形を想定しています。
テストでは実際のAPIを使用し、Jest上で`userEvent`を用いてAPIキーを自動入力するために、APIキーをJest側から環境変数として設定しておく必要があります。

```cp src/setupEnvTemplate.ts src/setupEnv.ts```

RESAS APIキーを`src/setupEnv.ts`に書く

### ローカルサーバ立ち上げ（開発用）

```yarn start```

### ビルド・ローカルでのserve

ビルド
```yarn build```

serve
```npx serve -s build```

### テスト

環境変数を使用するテストの場合、`src/setupTests.ts`ファイル内の`src/setupEnv.ts`のimportと実行に関する行のコメントアウトを外してください

```yarn test```

## その他コマンド

lint
```yarn lint```

フォーマット
```yarn format```
