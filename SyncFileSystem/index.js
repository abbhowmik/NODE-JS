const fs = require("fs");

// creating a file
// fs.writeFileSync("bio.txt", "here my bio's will appear later");
// fs.appendFileSync(
//   "bio.txt",
//   " and the other details also and course details and others"
// );

// reading file's content
// const data = fs.readFileSync("bio.txt", "utf-8");
// console.log(data);

// renaming file
// fs.renameSync("bio.txt", "myBio.txt");

// deleting file
fs.unlinkSync("myBio.txt");
