const express=require("express");
const path=require("path");

const app=express();//http.createServer

// app.get("/",(req,res)=>{
//     //write text, setHeader("content-type","text/html");

//    // res.write("Welcome to express");
//    // res.end();
//    //res.send("Welcome to <b>express</b>");
//    //Path+Name
//    //Path (Absolute Path) w.r.t root directory
// // __dirname
// console.log(__dirname);
// //Absolute path->Folder
// //Relative path -> File
// //"./index.html"
// //res.end();

//    res.sendFile(path.join(__dirname,"./index.html"))


// })

//Static folder -> Static Resource
//server->app
//server additional functional ->Middleware->
app.use(express.static("."));
app.use(express.urlencoded({extended:true}));
//username=value&password=value->extended:false;
//user[name]=value&user[age]=value->extended:true

/*
end 

*/
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./home.html"));
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"./about.html"));

})
app.get("/getData",(req,res)=>{

    //req.query->object->key value pair
    res.send(`Welcome ${req.query.name}`)
})
app.post("/getdata",(req,res)=>{

     res.send(`Welcome ${req.body.name}`)
})
app.listen(5000,(err)=>{
    if(err)
        console.log("Error in starting server...")
    else
        console.log("Server Started...")

})


