import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true , limit: "16kb"}))


app.use(express.static("public"))
app.use(cookieParser())




//routes
// import userRouter from './routes/user.route.js'

// //routes declaration 

// app.use("/users", userRouter)

import userRouter from './routes/user.route.js'


//routes declaration
app.use("/api/v1/users", userRouter)
//helping the middleware to do something
// http://localhost:8080/users/register
// so it helps us here to working like a props in reaat 


export {app}