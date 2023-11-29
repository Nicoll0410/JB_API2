const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const citasRoute = require("./routes/citas");


//Settings 
const index = express();
const port = process.env.PORT || 3000;

//Middlewares
index.use(express.json());
index.use("/api", citasRoute);

//Routes
index.get("/", (req, res) => {
    res.send("Bienvenido");
});

//Mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a Mongo Atlas"))
.catch((error) => console.error(error));

//Server listening
index.listen(port, () => console.log("Servidor listo" , port));