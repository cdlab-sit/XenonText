---
sidebar: auto
---

# Development

## 開発者

|リードデベロッパー||コアチーム||
|:-:|:-:|:-:|:-:|
|<img alt="Higurashi Takuto icon" src="https://avatars.githubusercontent.com/u/29699789?s=150" style="width: 150px; height: auto; border-radius: 50%;"><p>Higurashi Takuto</p><p>[<span class="mdi mdi-github" style="font-size: 32px;"></span>](https://github.com/higurashi-takuto)[<span class="mdi mdi-git" style="font-size: 32px;"></span>](https://github.com/cdlab-sit/XenonText/commits?author=higurashi-takuto)[<span class="mdi mdi-home" style="font-size: 32px;"></span>](https://hgrs.me/)</p>|<img alt="Sota Watanabe icon" src="https://avatars.githubusercontent.com/u/45622709?s=150" style="width: 150px; height: auto; border-radius: 50%;"><p>Sota Watanabe</p><p>[<span class="mdi mdi-github" style="font-size: 32px;"></span>](https://github.com/Sota-Watanabe)[<span class="mdi mdi-git" style="font-size: 32px;"></span>](https://github.com/cdlab-sit/XenonText/commits?author=Sota-Watanabe)[<span class="mdi mdi-home" style="font-size: 32px;"></span>](https://portfolio.so-ta.net/)</p>|<img alt="Shota Suzuki icon" src="https://avatars.githubusercontent.com/u/33568179?s=150" style="width: 150px; height: auto; border-radius: 50%;"><p>Shota Suzuki</p><p>[<span class="mdi mdi-github" style="font-size: 32px;"></span>](https://github.com/SuzuSho130)[<span class="mdi mdi-git" style="font-size: 32px;"></span>](https://github.com/cdlab-sit/XenonText/commits?author=SuzuSho130)</p>|<img alt="Takuya Kawaguchi icon" src="https://avatars.githubusercontent.com/u/28913260?s=150" style="width: 150px; height: auto; border-radius: 50%;"><p>Takuya Kawaguchi</p><p>[<span class="mdi mdi-github" style="font-size: 32px;"></span>](https://github.com/kawapoo)[<span class="mdi mdi-git" style="font-size: 32px;"></span>](https://github.com/cdlab-sit/XenonText/commits?author=kawapoo)[<span class="mdi mdi-home" style="font-size: 32px;"></span>](https://www.team-reus.net/)</p>|

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
