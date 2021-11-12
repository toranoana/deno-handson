# 003 モジュールの利用

ローカルのモジュールを相対パスで指定して利用します。

```shell
deno run sample1.ts
```

Deno公式サイトに配置されたモジュールを利用します。

```shell
deno run sample2.ts
```

Deno公式サイト以外のモジュールを利用することもできます。

```shell
deno run sample3.ts
```

`deps.ts`に外部モジュールを集約して管理する方法です。

```shell
deno run sample4.ts
```

Import Mapという機能を使って外部モジュールを管理する方法です。

```shell
deno run --import-map=./import_map.json sample5.ts
```
