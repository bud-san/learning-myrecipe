/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly MICROCMS_SERVICE_DOMAIN: string
  readonly MICROCMS_API_KEY: string
  // オプション: APIエンドポイント名を環境変数で設定可能
  readonly MICROCMS_RECIPES_ENDPOINT?: string
  readonly MICROCMS_INGREDIENTS_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Astroでは環境変数はimport.meta.envで読み込む
// SSGの場合、ビルド時にサーバー側で実行されるため環境変数は利用可能
// 開発サーバーでも環境変数は自動的に読み込まれる


