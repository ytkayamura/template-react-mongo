# template-react-mongo
サーバサイド、mongoありのReact、Reduxを使ったごく簡単なアプリ/テンプレート。herokuへのデプロイに対応。

## Heroku App
https://template-react-mongo.herokuapp.com/

## Install
```
$ yarn
```

## Debug
以下、それぞれ別ターミナルで実行。
```
$ mongod
```
```
$ yarn build:dev:server
```
```
$ yarn start:dev:server
```
```
$ yarn start:dev
```
もしくは
```
$ mongod
```
```
$ yarn start:dev:server:babel
```
```
$ yarn start:dev
```
ただし、こちらはbabel-watchが安定しないため、しばしば立ち上げ直しが必要になる。

## Build Production And Run
```
$ yarn start
```

## Heroku Deploy
herokuアプリのアドオンにmLab MongoDBを追加してデプロイ。
