import express from "express";
import cors from "cors";

import { loadBackend } from "./backend/index.js";


var app = express();

app.use(cors());

app.use("/",express.static("./public"));
var port = process.env.PORT || 2222;

app.use(express.json());

loadBackend(app);


app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});




