const express = require("express")
const app = express()
const port = 3000

app.use(express())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.post("/login",(req,res)=>{
    const {Username,email,password,Dob} = req.body

    if (!Username){
        res.status(400).json("Username cannot be empty")
    }
    if (!email){
        res.status(400).json("Email cannot be empty")
    }
    if (password.length()<8 && password.length()>16){
        res.status(400).json("Password length should be greater than 8 or less than or equal to 16")
    }

    else{
        res.status(200).json(
            
            {Username},
            {email},
              {password},
             {Dob}
            
        )
    }
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})