import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

// app.use(cors()) ---basically cors is used to (like using an API from a different domain), you want to allow cross-origin requests.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// 1--- middlewares to accept data of different types/ resources/ forms
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());
// 1---
// Note: use of middlewares: they re used in a specific sequence as per need to do some small tasks like: cheking something...before handling by the router
// middlewares always use a 'next' flag which just tells that i am done, now it's next middleware's turn :)



export { app }