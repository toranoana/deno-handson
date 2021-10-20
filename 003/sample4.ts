import { format } from "std-datetime";
import cloneDeep from "lodash/cloneDeep.js";

const today = new Date();

format(today, "yyyy/MM/dd");

const x = [{ a: format(today, "yyyy/MM/dd") }];
const y = cloneDeep(x);

x[0].a = format(today, "yyyy-MM-dd");

console.log("x:", x);
console.log("y:", y);
