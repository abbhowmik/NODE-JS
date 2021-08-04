const fs = require("fs");

// creating file using async or callback functions
// fs.writeFile(
//   "file.txt",
//   "this is a file created by async callback funtion",
//   (error) => {
//     console.log("File is created");
//   }
// );

// reading files content using async
fs.readFile("file.txt", "utf-8", (err, res) => {
  console.log(res);
});
