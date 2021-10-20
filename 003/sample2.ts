import { format, parse } from "https://deno.land/std@0.112.0/datetime/mod.ts";

const source = "12-11-2021";

const date = parse(source, "dd-MM-yyyy");

console.log(format(date, "yyyy/MM/dd"));
