// fichier config
////////// connection avec mongoDB 
const mongoose = require('mongoose');
const connectDB = async()=>{
    try {
        mongoose.set('strictQuery',false);
        mongoose.connect(process.env.MONGO_URI,()=>{
            console.log('mongo connected');
        });
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

module.exports = connectDB;

