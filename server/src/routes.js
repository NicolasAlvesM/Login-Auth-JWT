const express=require('express')
const Controller=require('./controller')
const routes=express.Router()
const authController=new Controller()
routes.post('/',authController.create)
routes.post('/login',authController.login)
routes.post('/me',authController.testJWT)
module.exports=routes