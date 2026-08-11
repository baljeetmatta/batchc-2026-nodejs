// EventEmitter= require("events"); //1 Class EventEmitter
//console.log(EventEmitter);
//EventEmitter emit;
//=new EventEmitter();

// let emitter=new EventEmitter();
// //Emit / handle

// emitter.emit("data",{data:10});//Raise

// emitter.on("data",(data)=>{

//     console.log("data event raised",data);

// })


// emitter.emit("data",{data:10});//Raise

// const EventEmitter=require("events");
// let emitter=new EventEmitter();
// function logger(message)
// {
//     console.log(message);
//     emitter.emit("done");

// }

// module.exports.logger=logger;
// module.exports.emitter=emitter;

const EventEmitter=require("events");
class LoggerClass extends EventEmitter
{

    loggger(message)
    {

        console.log(message);
        this.emit("done");




    }
}
module.exports=LoggerClass;



