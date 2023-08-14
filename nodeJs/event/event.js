const EventEmitter = require("events");
class MyEventEmitter extends EventEmitter {}
const event = new MyEventEmitter();
event.on("play", () => {
  console.log("事件触发");
});
setTimeout(() => {
  event.emit("play");
}, 2000);
