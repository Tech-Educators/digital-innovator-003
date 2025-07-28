console.log("Hello NPM packages!");

// There are two ways we can do this
// Here's the old way you still might see:
// const dayjs = require("dayjs");

// But the new syntax which is more common
import dayjs from "dayjs";
// if you're using "type":"module" in your package.json then use the import syntax

// Now, we can start to use our package!
console.log("Get the hour:", dayjs().hour());
console.log(dayjs().minute());
console.log(dayjs().second());
