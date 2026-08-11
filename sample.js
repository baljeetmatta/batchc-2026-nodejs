// const logger=require("./logger");
// const EventEmitter=require("events");
// const emitter=new EventEmitter();
// emitter.on("done",()=>{
//     console.log("logger execute...");

// })

// const logger=require("./logger");

// logger.emitter.on("done",()=>{
//     console.log("Funciton executed...")
// })
// logger.logger("My workd");

//logger("My Work");


const LoggerClass= require("./logger");
const loggerObject=new LoggerClass();
loggerObject.on("done",()=>{
    console.log("funciton executed...")
})
loggerObject.loggger("Demo Work");

