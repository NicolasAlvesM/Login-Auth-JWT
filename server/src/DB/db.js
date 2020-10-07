const {MongoClient}=require('mongodb');
const uri='mongodb+srv://nicolasalves:moreno22@cluster0.wr9sr.mongodb.net/loginDB?retryWrites=true&w=majority';
let chachedDB=null
async function conn(){
    if(chachedDB)
        return chachedDB

    const mongo=await MongoClient.connect(uri,{useUnifiedTopology:true})
    const db=mongo.db('loginData')
    chachedDB=db
    return db
}
module.exports=conn