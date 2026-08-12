const http=require("http");//object->functions
const fs=require("fs");

const server=http.createServer((request,response)=>{

    response.setHeader("content-type","text/html");

//    // console.log(request.url);
//    if(request.url=="/")
//    {
//     fs.readFile("./index.html","utf-8",(err,data)=>{
//         response.write(data);
//         response.end();

//     })

//     // response.write("<h2>Welcome</h2> to <b>Server Home</b> Page...")
//     // response.end();
//    }
//    else if(request.url=="/about")
//    {
//     fs.readFile("./about.html","utf-8",(err,data)=>{
//         response.write(data);
//         response.end();
        
//     })

//     // response.write("<h2>Welcome</h2> to <b>Server Home</b> Page...")
//     // response.end();
//    }
//    else if(request.url=="/style.css")
//    {
//     fs.readFile("./style.css","utf-8",(err,data)=>{
//         response.write(data);
//         response.end();
        
//     })

//     // response.write("<h2>Welcome</h2> to <b>Server Home</b> Page...")
//     // response.end();
//    }
//     else if(request.url=="/code.js")
//    {
//     fs.readFile("./code.js","utf-8",(err,data)=>{
//         response.write(data);
//         response.end();
        
//     })

//     // response.write("<h2>Welcome</h2> to <b>Server Home</b> Page...")
//     // response.end();
//    }
//    else if(request.url=="/abc")
//    {

//      response.write("Welcome to abc  Page...")
//     response.end();
//    }
//    else{
//     response.end();

//    }

        let filename=request.url.substring(1);
        if(request.url=="/")
            filename="index.html";
        
        console.log(filename);

        fs.readFile("./"+filename,"utf-8",(err,data)=>{
            if(err)
                response.end();
            else
            {
                response.write(data);
                response.end();

            }
        })


});
// server.on("connection",(socket)=>{ 
//     console.log("Client request...")
// })
server.listen(5000,(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Server running at 5000 port");
});



