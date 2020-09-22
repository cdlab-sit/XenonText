---
sidebar: auto
---

# Development

## 開発環境

```
Node.js: 10.20.0
```

Electron を用いた GUI アプリケーションのため、GUI 環境が必要となります。

## 開発

### リポジトリの準備

リポジトリは GitHub で管理されています。

```sh
$ git clone https://github.com/cdlab-sit/XenonText.git
$ cd XenonText
```

### 依存ライブラリのインストール

ライブラリは `npm` を用いて管理しています。

```sh
$ npm install
```

### 実行

#### 通常実行

通常実行を行うには以下のコマンドを利用します。

```sh
$ npm start
```
#### ホットリロード実行

ホットリロードに対応した状態で実行を行うことができます。

```sh
# ファイル監視
$ npm run watch
# 実行
$ npm run dev
```

### リリースビルド

アプリケーションとしてビルドを行います。

```sh
$ npm run build
```

## ブランチ管理

基本的に git-flow に合わせたブランチの管理しています。
