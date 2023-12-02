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

## その他コマンド

lint
```yarn lint```

フォーマット
```yarn format```

テスト
```yarn test```
