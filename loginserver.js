const express = require("express");
const fs = require("fs");
const path=require("path");

const session=require("express-session")
const app = express();
app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret:"kjahdkahdkjassddad",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*1000*60
    }
}))

/* END POINTS*/

app.post("/signup", (req, res) => {

    // console.log(req.body);
    // res.end();
    //users.json->name,username,password
    fs.readFile("./users.json", "utf-8", (err, data) => {
        //1. Existing users
        let users = [];
        if (err)
            users = [];
        else
            users = JSON.parse(data);
        //2. Username
        let results = users.filter((item) => {
            if (item.username == req.body.username)
                return true;

        })
        if (results.length != 0) {
            res.send("User already exists")
        }
        else {
            //3. Not exist

            users.push({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password
            });
            //4 File Write
            fs.writeFile("./users.json", JSON.stringify(users), (err) => {
                res.send("User created successfully")
            })

        }
    })


})
app.post("/login", (req, res) => {

    //1. Existing Users
    fs.readFile("./users.json", "utf-8", (err, data) => {
        let users = [];
        if (err)
            users = [];

        users = JSON.parse(data);

        let results = users.filter((item) => {
            if (item.username == req.body.username && item.password == req.body.password)
                return true;

        })
        if (results.length == 0)
            res.send("Invalid user/password")
        else
            //res.send("Welcome user");
        {
            req.session.name=results[0].name;

        res.redirect("/dashboard")
        }


    })

})
app.get("/dashboard",(req,res)=>{
    console.log(req.session);
    if(!req.session.name)
        res.sendFile(path.join(__dirname,"./login.html"));

else
    res.send("welcome to "+req.session.name);

})
app.listen(5000, (err) => {

    if (err)
        console.log("Error in starting Server..");
    else
        console.log("Server Started...")
})
