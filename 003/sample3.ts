import cloneDeep from "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/cloneDeep.js";

const x = [{ a: 1 }, { b: 2 }];
const y = cloneDeep(x);

console.log("x[0] !== y[0]:", x[0] !== y[0]);

x[0].a = 3;

console.log("x:", x);
console.log("y:", y);
