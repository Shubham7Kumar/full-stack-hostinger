import express from "express";
import cors from 'cors';

const app = express();

app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        "http://145.223.21.242:5174"
        // add production url
    ],
    credentials: true,
    methods:["GET","POST"],
    allowedHeaders: ["Content-Type","Authorization"]
}));
app.use(express.json());
app.use(express.urlencoded({ limit: "16kb" }));

app.get("/api/message",(req,res) => {
    res.json({ message: "Hello from shubham cloud server." })
})

app.listen(4000,"0.0.0.0",() =>{
    console.log("Server started at http://127.0.0.1:4000");
});