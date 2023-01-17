const express = require('express');
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require('../controllers/post.controller');
const router =express.Router();

//get
// renvoie un certains nombre de donnée depuis la db
//request : envoyer dans la requêtes (je te passe un id,num de commentaire etc.. )
// respond : ce que le serveur renvoie
router.get("/",getPosts);

//post : pour envoyer des donnée
// sur postam : 
//-selectionner post
//-pour envoyer les donnée : aller sur "body" ,x-www-form-urlencoded
// router.post("/",(req,res)=>{
    
//     // on envoie la donnée avec la key message dans postman
//     // si on ecriver juste req.body on aurait tout les key : message, author etc..
//     console.log(req.body);
//     res.json({message:req.body.message});
// });

router.post("/",setPosts);


// put: faire une mise à jour
// dans postman : selectionner put, dans url rajouter un id
//ex :http://localhost:5000/post/4554785
// body , x www form
router.put('/:id',editPost);

// delete : supprimer un donnée

router.delete('/:id',deletePost);

// route pour les likes d'un post
// mettre à jour une partie spécifique des données
router.patch("/like-post/:id",likePost)

// dislike 
router.patch("/dislike-post/:id",dislikePost)


module.exports = router;