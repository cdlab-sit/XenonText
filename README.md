# Website

このブランチでは [リリースページ](https://cdlab-sit.github.io/XenonText/) と [ドキュメント](https://cdlab-sit.github.io/XenonText/documentation/) の更新を行います。

このブランチの管理は全て @higurashi-takuto が行なっています。
更新などには注意してください。

## リリースページ
### 概要

`release/` のディレクトリで管理されています。

基本的には、XenonText 本体から Web 上で必要な機能のみに削減したものをそのまま埋め込んでいます。
そのため、React と Tailwind CSS を用いたデザインです。

### 開発
`Node.js 10.20.0` の環境で開発しています。

```sh
# 管理ディレクトリへ移動
$ cd release
# ライブラリのインストール
$ npm i
# 開発サーバ起動
$ npm run start
# ビルド
$ npm run build
```

## ドキュメント
### 概要

`document/` のディレクトリで管理されています。

XenonText 本体からは完全に分離され、VuePress で開発しています。

### 開発
`Node.js 10.20.0` の環境で開発しています。

```sh
# 管理ディレクトリへ移動
$ cd document
# ライブラリのインストール
$ npm i
# 開発サーバ起動
$ npm run dev
# ビルド
$ npm run build
```

## GitHub Pages の更新

GitHub Pages で公開されるのは `docs/` ディレクトリです。

`docs/` 直下にはリリースページが配置され、 `docs/documentation/` にはドキュメントが配置されます。

ビルドは `build.sh` を利用することで、リリースページとドキュメントの両方が自動でビルドされます。
