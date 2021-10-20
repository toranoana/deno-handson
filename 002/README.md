# 002

パーミッション

```shell
deno run sample1.ts
# error: Uncaught PermissionDenied: Requires net access to "api.github.com", run again with the --allow-net flag

deno run --allow-net=api.github.com,www.jma.go.jp sample1.ts
```

```shell
deno run sample2.ts
# error: Uncaught (in promise) PermissionDenied: Requires read access to "./sample1.txt", run again with the --allow-read flag

# すべてのファイル読み込み許可
deno run --allow-read sample2.ts
# 指定のディレクトリ以下を許可(相対パスで指定)
deno run --allow-read=./assets sample2.ts
# 指定のディレクトリ以下を許可(絶対パスで指定)
# ※各環境のパスに書き換えてください
deno run --allow-read=/usr/src/app/002/assets sample2.ts
deno run --allow-read=C:\Documents\app\002\assets sample2.ts
```

```shell
# すべてのファイル書き込み許可
deno run --allow-write sample3.ts
# 指定のディレクトリ以下を許可(相対パスで指定)
deno run --allow-write=./dist sample3.ts
# 指定のディレクトリ以下を許可(絶対パスで指定)
# ※各環境のパスに書き換えてください
deno run --allow-write=/usr/src/app/002/dist sample3.ts
deno run --allow-write=C:\Documents\app\002\dist sample3.ts
```
