const connectDB=require('./DB/db')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const {promisify}=require('util')
class LoginController{
    async testJWT(req,res){
        const authHeader=req.headers.authorization
        const [scheme, token] = authHeader.split(" ");
        try {
            const decoded = await promisify(jwt.verify)(token, "secret");  
            return res.json({message:"Your user id:",id:decoded.id});
          } catch (err) {
            return res.status(401).send({ error: "Token invalid" });
          }
    }
    async login(req,res){
        const {email,senha}=req.body
        const db=await connectDB()
        const collection = db.collection('loginusers');
        const user=await collection.findOne({email})
        if(!user)
            return res.status(500).json({err:'Usuário não existe'});
        const authPassword=await bcrypt.compare(senha,user.password);
        if(authPassword){
            delete user.password
            return res.json({user,token:jwt.sign({id:user._id}, "secret", {
                expiresIn: 86400
              })})
        }
        return res.status(500).json({err:'Senha incorreta'});
    }
    async create(req,res){
        const {user,email,senha}=req.body
        const db=await connectDB()
        const collection = db.collection('loginusers');
        const isAnUser=await collection.findOne({email})
        if(isAnUser)
        return res.json({message:'Usuário existente'})
        const password = await bcrypt.hash(senha, 8);
        collection.insertOne({user,email,password})
        res.json({ok:"ok"})
    }
}
module.exports=LoginController