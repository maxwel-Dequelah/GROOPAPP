const express = require('express')
// const cors =require('cors')
const path = require('path')
const app = express()

// sesion
const session =require('express-session')
const filestore = require('session-file-store')(session)


// connecting MySQL
const mysql =require('mysql')
const connection = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sacodb1'
  })
connection.connect()


var accData = NaN
setInterval(()=>{
    connection.query('SELECT * FROM accounts',(error,results,__)=>{
        if(error) console.log(error);
        // console.log(results);
        accData = results
    
    })
},2000)


console.log(accData)



// PORT TO RUN FROM
const port = process.env.PORT || 3001



app.use(express.json())
app.use(express.urlencoded({extended:false}))

// creating a sessions

app.use(session({
    name: "session-id",
    secret: "GFGEnter", // Secret key,
    saveUninitialized: false,
    resave: false,
    store: new filestore()
}))
  
// Asking for the authorization
function auth(req, res, next) {
    // Checking for the session
    console.log(req.session)
  
    // Checking for the authorization
    if (!req.session.user) {
        var authHeader = req.headers.authorization;
        console.log(authHeader);
        var err = new Error("You are not authenticated")
        res.setHeader("WWW-Authenticate", "Basic")
        err.status = 401
        next(err)
  
        var auth = new Buffer.from(authHeader.split(' ')[1],
            "base64").toString().split(":")
  
        // Reading username and password
        var username = auth[0]
        var password = auth[1]
        if (username == "admin2" && password == "password") {
            req.session.user = "admin2"
            next()
        }
        else {
            // Retry incase of incorrect credentials
            var err = new Error('You are not authenticated!');
            res.setHeader("WWW-Authenticate", "Basic")
            err.status = 401;
            return next(err);
        }
    }
    else {
        if (req.session.user === "admin2") {
            next()
        }
        else {
            var err = new Error('You are not authenticated!');
            res.setHeader("WWW-Authenticate", "Basic")
            err.status = 401;
            return next(err);
        }
    }
}




// ROUTES
// ROUTES
// app.use(auth)
app.post('/api/login',(req, res)=>{
    req.get(req.body)
})

app.get('/api/a',(req,res)=>{
    res.send('Me too')
})

// showing all ids
app.get('/api/accounts',(req,res)=>{
    
    res.json(accData) 
})

// returning a single Id
app.get("/api/accounts/:id",(req,res)=>{
    
    const accId = req.params.id
    const account = accData.find(e =>e.AccNumber == accId)

    if(account){
        res.json(account)
    }
    else{
        res.send(`the account ${accId}  does not exist`)
    }
    

})

app.listen(port)