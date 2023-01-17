const PostModel = require('../models/post.model');
// retourner un message depuis la db

module.exports.getPosts = async(req,res)=>{
    const post = await PostModel.find();
    res.status(200).json(post);
}

// controller pour envoyer un message sur le db
module.exports.setPosts = async(req,res)=>{
    
    if(!req.body.message){
        res.status(400).json({message:"Merci d'ajouter un message"});
    }
    
    // envoyer les valeurs du body dans à la db
    const post = await PostModel.create({
        message:req.body.message,
        author:req.body.author
    })
    res.status(200).json(post);

    // on envoie la donnée avec la key message dans postman
    // si on ecriver juste req.body on aurait tout les key : message, author etc..
    
        //console.log(req.body);
       //res.json({message:req.body.message});
       //res.json({message:"ça fonctionne depuis le controller"});
};


// modifier les data dans la db

module.exports.editPost = async(req,res)=>{
    const post = await PostModel.findById(req.params.id);

    if(!post)
        res.status(400).json({message:"ce post n'existe pas"});


    const updatePost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new:true}
    )
    res.status(200).json(updatePost);    
    
}


// delete un message dans la db
module.exports.deletePost = async(req,res)=>{
    const post = await PostModel.findById(req.params.id);

    if(!post)
        res.status(400).json({message:"ce post n'existe pas"});

    await post.remove();
    res.status(200).json("message supprimé " + req.params.id);
}


// like a post by userId

module.exports.likePost = async(req,res)=>{
    try {
        await  PostModel.findByIdAndUpdate(
            req.params.id,
            {$addToSet:{likers:req.body.userId}},
            {new:true}
        ).then((data)=> res.status(200).send(data));

    } catch (error) {
        res.status(400).json(error);
    }
}

// unlike a post by userId

module.exports.dislikePost = async(req,res)=>{
    try {
        await  PostModel.findByIdAndUpdate(
            req.params.id,
            // pull : retirer
            {$pull:{likers:req.body.userId}},
            {new:true}
        ).then((data)=> res.status(200).send(data));

    } catch (error) {
        res.status(400).json(error);
    }
}
