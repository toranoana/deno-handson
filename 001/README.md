# 001 基本的な操作

## runについて

下記のコマンドを実行してください。

```shell
deno run sample.ts
```

「こんにちは！とらラボ」と表示されれば成功です。

## fmtについて

```shell
deno fmt sample.ts
```

適切なところに空白が入ったり、インデントが直っていれば成功です。

## lintについて

下記のコマンドを実行してください

```shell
deno lint sample.ts
```

下記のようなメッセージが表示されます。
```
(no-unused-vars) `a` is never used
const a = "使わない変数";
      ^
```

`const a = "使わない変数";`の1行を消してもう一度下記のコマンドを実行してください。

```shell
deno lint sample.ts
```

先程のメッセージが表示されなくなれば成功です。
