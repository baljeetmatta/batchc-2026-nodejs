const http=require("http");//object->functions
const fs=require("fs");
const url=require("url")

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
const parsedUrl=url.parse(request.url,true);
console.log(parsedUrl);

    let file=true;
        //let filename=request.url.substring(1);
        let filename=parsedUrl.pathname
        if(parsedUrl.pathname=="/" )
            filename="index.html";

        else if(parsedUrl.pathname=="/getData" && request.method=="GET")

        {
            file=false;
            console.log(parsedUrl.query.name,parsedUrl.query.password);
            response.write(`Welcome ${parsedUrl.query.name}`);

            response.end();


        }

         else if(parsedUrl.pathname=="/getData" && request.method=="POST")
            
        {
 file=false;
            let body="";
            request.on("data",(chunk)=>{
                body+=chunk;

            })
            request.on("end",()=>{
                    console.log(body);
                    const data=new URLSearchParams(body);
                    console.log(data.get("name"),data.get("password"));
                     response.write(`Welcome ${data.get("name")}`);

            response.end();
                    

            })
           
           


        }
        
        console.log(filename);
if(file){
        fs.readFile("./"+filename,"utf-8",(err,data)=>{
            if(err)
                response.end();
            else
            {
                response.write(data);
                response.end();

            }
        })
    }

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



