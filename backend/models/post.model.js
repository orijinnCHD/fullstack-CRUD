const mongoose = require('mongoose');

//creéer un schéma
// c'est le schéma de notre POST

const postSchema = mongoose.Schema(
    {
        message:{
            type:String,
            required:true,
        },
        author:{
           type:String,
           required:true,

        },
        likers:{
            // array de string
            type:[String],
        }
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model('post',postSchema);
