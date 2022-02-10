import { serve } from "https://deno.land/std@0.123.0/http/server.ts";
import Handlebars from "https://cdn.skypack.dev/handlebars@4.7.7";

const template = Handlebars.compile(`<body>
<form method="GET">
<input type="text" name="area" value="{{area}}" />
<input type="submit" />
</form>
{{result}}
<br />
出典:
<a href="https://www.jma.go.jp/bosai/forecast/" target="_blank">
  気象庁ホームページ
</a>
</body>`);

console.log("http://localhost:8000/");

await serve(async (req: Request) => {
  const url = new URL(req.url);
  const area = url.searchParams.get("area");

  const result = area ? await getWeather(area) : "";

  const body = template({ area, result });

  return new Response(body, {
    headers: { ["Content-type"]: "text/html; charset=UTF-8" },
  });
});

async function getWeather(area: string): Promise<string> {
  // 気象庁
  const weatherRes = await fetch(
    "https://www.jma.go.jp/bosai/forecast/data/forecast/010000.json",
  );
  const weather = await weatherRes.json();

  const q = weather.filter((s: { name: string }) => s.name === area)[0]?.srf
    .timeSeries[0]
    .areas;

  if (!q) {
    return `${area}の天気は見つかりませんでした。`;
  }

  return `今日の ${q.area.name} の天気は「${q.weathers[0]}」です。`;
}
