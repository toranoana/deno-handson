import { serve } from "https://deno.land/std@0.123.0/http/server.ts";
import Handlebars from "https://cdn.skypack.dev/handlebars@4.7.7";

const template = Handlebars.compile(`<body>
こんばんは! <b>{{name}}</b>さん
</body>`);

console.log("http://localhost:8000/");

await serve(() => {
  const body = template({ name: "とらラボ" });

  return new Response(body, {
    headers: { ["Content-type"]: "text/html; charset=UTF-8" },
  });
  // port は省略可能 省略した場合は8000
}, { port: 8000 });
