const http = require("http");
const fs = require("fs");
// const chalk = require("chalk");
// const validator = require("validator");

// // console.log(chalk.green("Hello world"));
// const info = validator.isEmail("ashis@ashis.com");
// console.log(info ? chalk.bgBlue("Valid Email") : chalk.bgRed("Invalid"));

// creation of own Server in Node js
// http
//   .createServer((req, res) => {
//     res.end("Welcome to Hello world.com");
//   })
//   .listen(8000);

const data = fs.readFileSync(`${__dirname}/api.json`, "utf-8");
const obj = JSON.parse(data);

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to the world of Hello");
  } else if (req.url == "/about") {
    res.end("Welcome to the world of About");
  } else if (req.url == "/contact") {
    res.end("Welcome to the world of contact");
  } else if (req.url == "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(obj[0].email);
    console.log(obj[0]);
  } else {
    res.writeHead(404);
    res.end("404 Errror");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});
