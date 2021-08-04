const bioData = {
  name: "Ashis",
  age: 18,
  Gender: "Male",
};

// console.log(typeof bioData);
const data = JSON.stringify(bioData);
console.log(data);
console.log(typeof data);
const jsonData = JSON.parse(data);
console.log(jsonData);
console.log(typeof jsonData);
