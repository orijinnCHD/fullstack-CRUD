const express = require("express");
const port = 5000;


// créer un serveur
const app = express();

// middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// toute les routes qui sont attrait à POST
app.use("/post",require("./routes/post.routes"));


//lancer le serveur
app.listen(port,()=>console.log("le serveur à démarrer au port " + port ))