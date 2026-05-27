const EventEmitter = require("events")
const emitter = new EventEmitter();

emitter.on("userRegistration", (username) => {
    console.log(`${username}, successfully registered!`)
})

exports.module = emitter;