// import については003/sample2.ts で解説
import { dirname, resolve } from "https://deno.land/std@0.125.0/path/mod.ts";

const dirPath = dirname(new URL(import.meta.url).pathname);
const assetPath = resolve(dirPath, "./assets/file.txt");

const text = await Deno.readTextFile(assetPath);
console.log(text);
