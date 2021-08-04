const EventEmitter = require("events");
const newEvents = new EventEmitter();

newEvents.on("event", (a, b) => {
  console.log(a, b);
});
newEvents.emit("event", 2, 3);
newEvents.emit("event", "2", "32");
console.log("this is a insane message and the other parth of");
