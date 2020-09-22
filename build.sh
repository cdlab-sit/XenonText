#!/bin/zsh

# docs ディレクトリを初期化
rm -rf docs/*

# リリースページのビルド
cd release
npm run build
cd ../

# リリースページのコピー
cp -r release/docs/ docs
