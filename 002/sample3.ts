// import については003/sample2.ts で解説
import { dirname, resolve } from "https://deno.land/std@0.125.0/path/mod.ts";

const dirPath = dirname(new URL(import.meta.url).pathname);
const distPath = resolve(dirPath, "./dist/hello.txt");

await Deno.writeTextFile(distPath, "Hello World!");

console.log("File written to ./dist/hello.txt");
