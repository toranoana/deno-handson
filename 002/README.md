# 002 パーミッション

## `--allow-net`について

下記のコマンドを実行してみてください。

```shell
deno run sample1.ts
# error: Uncaught PermissionDenied: Requires net access to "api.github.com", run again with the --allow-net flag
```

ネットワークアクセスが必要なプログラムだと、エラーが発生します。

オプションを付けてアクセスするドメインを指定して実行してみてください。

```shell
deno run --allow-net=api.github.com,www.jma.go.jp sample1.ts
```

ネットワークアクセスが許可されます。

## `--allow-read`について

下記のコマンドを実行してみてください。

```shell
deno run sample2.ts
# error: Uncaught (in promise) PermissionDenied: Requires read access to "./sample1.txt", run again with the --allow-read flag
```

ファイル読み込みが必要なプログラムだと、エラーが発生します。

オプションをつけてファイルの読み込みを許可するディレクトリを指定します。

```
deno run --allow-read=./assets sample2.ts
```

ファイルの読み込みが許可されます。

## `--allow-write`について

書き込みについても同様に許可するディレクトリを指定します。

```shell
deno run --allow-write=./dist sample3.ts
```
