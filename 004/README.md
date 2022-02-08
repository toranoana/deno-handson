# 004 サンプルWebアプリケーションの作成

## シンプルなWebアプリケーション

下記のコマンドを実行し、Webブラウザで http://localhost:8000/ を開いてください。

```shell
deno run --allow-net server.ts
# または
deno run --allow-net=0.0.0.0:8000 server.ts
```

Ctrl + Cでサーバーを停止できます。

## 天気を表示するWebアプリケーション

下記のコマンドを実行し、Webブラウザで http://localhost:8000/ を開いてください

```shell
deno run --allow-net weather_server.ts
# または
deno run --allow-net=0.0.0.0:8000,www.jma.go.jp weather_server.ts
```

Ctrl + Cでサーバーを停止できます。
