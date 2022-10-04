# 多面張トレーナー

## 概要

麻雀の多面待ちを覚えるためのアプリ

## 開発環境構築手順

```bash
$ cd /path/to/somewhere/workdir
$ git clone git@github.com:k0kishima/tamenchan_trainer.git
$ cd tamenchan_trainer
$ yarn install
$ yarn start
```

## 遊び方

以下の収録のように牌をクリックして、待ち牌が全部クリックされたら正解アニメーションが出て次の問題に移動します。  
あとは問題を解くことの繰り返しです。


https://user-images.githubusercontent.com/56298669/193800157-4a525807-2102-42b2-a114-0fcb3deefffd.mov


ver0.1.0時点では問題のマスタは以下に簡易的に置いてます。
https://github.com/k0kishima/tamenchan_trainer/blob/8a60071bb92818c787be29b04fac9d01676c7187/src/utils/question.ts#L5

現時点では2ケースしかありませんが、この辺編集したら問題を増やせます（PR歓迎です）

Herokuなどにデプロイしたら一応スマホからでもできます。
