// const url=require("./script");
// console.log(url);
//required->value->constant ->variable
//console.log('value is',data);
//data();

// const logger=require("./script");

// logger();

// const script= require("./script");

// script.log();
// console.log(script.url);

//Core Modules, os, fs,path,events,http
// const os=require("os");
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.arch());

const fs=require("fs");
console.log(module);

console.log(__dirname);
// const files=fs.readdirSync(__dirname);
//  console.log(files);
// console.log("Reading...")

 fs.readdir(__dirname,(err,files)=>{
    console.log("Dir data",files);
 })
 console.log("Reading...");


 fs.readFile("./script.js","utf-8",(err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data);

 })
 const data=fs.readFileSync("./script.js","utf-8");
 console.log(data);
 

 //fs.readdirSync(__dirname)
 //__filename




