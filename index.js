const cModule = require("./build/Release/cRabbit");

function cTest() {
  const result = cModule.ping();
  console.log(result);
}

console.log("Making C++ module call");
cTest();
console.log("Done C++ module call");
