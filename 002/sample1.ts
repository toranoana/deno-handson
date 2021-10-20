// Github API
const res = await fetch("https://api.github.com/users/toranoana");

console.log(await res.json());

// 気象庁
const weatherRes = await fetch(
  "https://www.jma.go.jp/bosai/forecast/data/forecast/010000.json",
);

const weather = await weatherRes.json();

const q =
  weather.filter((s: { name: string }) => s.name === "東京")[0].srf.timeSeries[0]
    .areas;

console.log(`
今日の ${q.area.name} の天気は
「${q.weathers[0]}」です。

出典：気象庁ホームページ　（ https://www.jma.go.jp/bosai/forecast/ ）
`);
