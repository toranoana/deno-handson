# 001 基本的な操作

## runについて

下記のコマンドを実行してください。

```shell
deno run sample.ts
```

「こんにちは！とらラボ」と表示されれば成功です。

## fmtについて

```diff
+  console.log(`こんにちは!${name}`);
-    console.log(`こんにちは!${name}`);
```

sample.tsの2行目の先頭の空白を2つから4つにして下記のコマンドを実行してください。

```shell
deno fmt sample.ts
```

空白が2つに戻っていれば成功です。

## lintについて

sample.ts の先頭に使わない変数を追加してみましょう。

```ts
const x = 1;
```

追加後、下記のコマンドを実行してください

```shell
deno lint sample.ts
```

```(no-unused-vars) `x` is never used```と表示されるはずです。
