const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const port = 5000;

// connection à la db
connectDB();

// créer un serveur
const app = express();

// middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// toute les routes qui sont attrait à POST
app.use("/post",require("./routes/post.routes"));


//lancer le serveur
app.listen(port,()=>console.log("le serveur à démarrer au port " + port ))


///// model view controller

// model : model de la db
// view : le front en react
// controller: action du CRUD envers le DB