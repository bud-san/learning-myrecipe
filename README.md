# マイレシピ v2

自作したレシピサイトをcursor + MCPサーバーを活用してリニューアルを実験的に試みたものです。

## 技術スタック

- **フロントエンド**: Astro
- **言語**: TypeScript (strictモード)
- **スタイリング**: TailwindCSS 4.x
- **CMS**: MicroCMS
- **ビルド**: SSG (Static Site Generation)
- **デプロイ**: GitHub Pages

## セットアップ

### 1. 依存関係のインストール

```bash
bun install
# または
npm install
```

### 2. 環境変数の設定

`.env`ファイルを作成し、MicroCMSの認証情報を設定してください：

```env
VITE_MICROCMS_SERVICE_DOMAIN=your-service-domain
VITE_MICROCMS_API_KEY=your-api-key
```

`.env.example`を参考にしてください。

### 3. 開発サーバーの起動

```bash
bun run dev
# または
npm run dev
```

ブラウザで `http://localhost:4321` を開いて確認してください。

### 4. ビルド

```bash
bun run build
# または
npm run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

### 5. プレビュー

```bash
bun run preview
# または
npm run preview
```

## コマンド

- `bun run dev` - 開発サーバーを起動
- `bun run build` - プロダクションビルド
- `bun run preview` - ビルド結果をプレビュー
- `bun run lint` - Biomeでリンターを実行
- `bun run lint:fix` - Biomeで自動修正
- `bun run format` - Prettierでフォーマット

## プロジェクト構造

```
/
├── src/
│   ├── components/     # UIコンポーネント
│   ├── layouts/        # レイアウトコンポーネント
│   ├── lib/            # ユーティリティ関数
│   ├── pages/          # ページファイル
│   ├── types/           # TypeScript型定義
│   └── env.d.ts        # 環境変数の型定義
├── public/              # 静的ファイル
└── dist/               # ビルド出力（生成される）
```

## ページ構成

- `/` - トップページ（検索・レシピ提案）
- `/recipes` - レシピ一覧ページ（検索結果）
- `/recipes/[id]` - レシピ詳細ページ

## コーディングルール

- インデント: 2スペース
- セミコロン: 使用しない
- コンポーネント名: PascalCase
- ファイル名: kebab-case
- その他: `.editorconfig`に準拠


