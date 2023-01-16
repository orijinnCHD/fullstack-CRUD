const express = require('express');
const router =express.Router();

//get
// donne moi un certains nombre de donnée
//request : envoyer dans la requêtes (je te passe un id,num de commentaire etc.. )
// respond : ce que le serveur renvoie
router.get("/",(req,res)=>{
    res.json({message:"Voici les données"});
});

//post : pour envoyer des donnée
// sur postam : 
//-selectionner post
//-pour envoyer les donnée : aller sur "body" ,x-www-form-urlencoded
router.post("/",(req,res)=>{
    
    // on envoie la donnée avec la key message dans postman
    // si on ecriver juste req.body on aurait tout les key : message, author etc..
    console.log(req.body);
    res.json({message:req.body.message});
});

// put: faire une mise à jour
// dans postman : selectionner put, dans url rajouter un id
//ex :http://localhost:5000/post/4554785
// body , x www form
router.put('/:id',(req,res)=>{
    console.log(req.param);
    res.json({messageId:req.params.id});
})


module.exports = router;