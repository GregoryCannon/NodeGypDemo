const cModule = require("./build/Release/cRabbit");

// Simple test run

function cTest() {
  const result = cModule.ping();
  console.log(result);
}

console.log("Making C++ module call");
cTest();
console.log("Done C++ module call");

// Simple web server
const http = require("http");
const port = 3000;

const simpleServer = http.createServer((req, res) => {
  const result = "C++ reponse: " + cModule.ping();
  res.end(result);
})

simpleServer.listen(port, (error) => {
  if (error){
    console.log("Something went wrong:", error);
  } else {
    console.log("Listening on port:", port);
  }
})
