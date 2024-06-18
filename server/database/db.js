import mongoose from "mongoose";


const Connection = async(username,password) => {
const URL = `mongodb://${username}:${password}@ac-rd41sih-shard-00-00.xmmolzi.mongodb.net:27017,ac-rd41sih-shard-00-01.xmmolzi.mongodb.net:27017,ac-rd41sih-shard-00-02.xmmolzi.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-980b0k-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
         console.log('Database Connected Successfully');
    }catch(error){
        console.log('error while connecting to database',error.message);
    }
}

export default Connection;