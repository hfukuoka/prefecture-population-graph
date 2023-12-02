# Test-APP

RESAS APIを用いて都道府県別人口構成グラフを表示するWebアプリ

## セットアップ

node18を想定

```yarn install```

### 環境変数

```cp .env.local.template .env.local```
```cp src/setupEnvTemplate.ts src/setupEnv.ts```

RESAS APIキーを`.env.local`と`src/setupEnv.ts`に書く

### ローカルサーバ立ち上げ（開発用）

```yarn start```

### ビルド・ローカルでのserve

ビルド
```yarn build```

serve
```npx serve -s build```

### テスト

環境変数を使用するテストの場合、`src/setupTests.ts`ファイル内の`src/setupEnv.ts`のimportと実行に関する行のコメントアウトを外してください

## その他コマンド

lint
```yarn lint```

フォーマット
```yarn format```
