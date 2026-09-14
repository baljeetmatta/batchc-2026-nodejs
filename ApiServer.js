const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const fs=require("fs");
const auth=require("./middleware/AuthToken")
require("dotenv").config();



const app=express();-
app.use(express.json());

app.use(express.static("."));
app.use(express.urlencoded({extended:true}))

/* END POINTS*/

app.post("/signup", async (req, res) => {

    const {name,username,password}=req.body;

    //validation and Sanitaion

    try{

        if(!name||!username||!password)
           return  res.status(400).json({
                message:"All Fields are required"
            })
    // console.log(req.body);
    // res.end();
    //users.json->name,username,password
    fs.readFile("./usersDatabse.json", "utf-8", async (err, data) => {
        //1. Existing users
        let users = [];
        if (err)
            users = [];
        else
            users = JSON.parse(data);
        //2. Username
        let results = users.filter((item) => {
            if (item.username == username)
                return true;

        })
        if (results.length != 0) {
            res.status(400).send("User already exists")
        }
        else {
            //3. Not exist

         const encPassword= await  bcrypt.hash(password,10)// 2 power 10//aysnc 
         console.log(encPassword);


            users.push({
                name: name,
                username: username,
                password: encPassword
            });
            //4 File Write
            fs.writeFile("./usersDatabse.json", JSON.stringify(users), (err) => {
                res.status(200).send("User created successfully")
            })

        }
    })
}
catch(e)
{
    res.status(500).json({
        message:"Something went wrong"
    })
}


})

app.get("/profile",auth,(req,res)=>{

    res.status(200).json({message:"Done"});
    
});



app.post("/login",(req,res)=>{
fs.readFile("./usersDatabse.json", "utf-8", async (err, data) => {
        //1. Existing users
        let users = [];
        if (err)
            users = [];
        else
            users = JSON.parse(data);

        const results=users.find(u=>u.username==req.body.username);
        if(!results)
        return    res.status(403).json({
        message:"Invalid user/password"})


    const isMatched=await bcrypt.compare(req.body.password,results.password)
    if(!isMatched)
    {
 return    res.status(403).json({
        message:"Invalid password"})

    }

       const token= jwt.sign({
            username:results.username
        },process.env.JWT_KEY,{
            expiresIn:"1h"
        }
        
    );
    res.status(200).json({
        token,
        message:"Login Successful"
    })

       // res.end();


    });



})

//Login->User Authenticate ,
//Token Generate for uuser

// /profile -> Token
app.listen(5000,(err)=>{

    if(!err)
        console.log("Server Started...");

})
