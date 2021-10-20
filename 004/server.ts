import { listenAndServe } from "https://deno.land/std@0.112.0/http/server.ts";
import Handlebars from "https://esm.sh/handlebars@4.7.7";

const template = Handlebars.compile(`<body>
こんにちは! <b>{{name}}</b>さん
</body>`);

console.log("http://localhost:8000/");

await listenAndServe(":8000", () => {
  const body = template({ name: "とらラボ" });

  return new Response(body, {
    headers: { ["Content-type"]: "text/html; charset=UTF-8" },
  });
});
