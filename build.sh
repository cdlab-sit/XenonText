#!/bin/zsh

# docs ディレクトリを初期化
rm -rf docs/*

# リリースページのビルド
cd release
npm install
npm run build
cd ../

# リリースページのコピー
cp -r release/docs/ docs

# ドキュメントのビルド
cd document
npm install
npm run build
cd ../

# ドキュメントのコピー
cp -r document/src/.vuepress/dist/ docs/documentation
