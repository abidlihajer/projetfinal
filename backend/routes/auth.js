const express=require('express')
const { signUp, signIn,current,deleteUser, updateUser, } = require('../controllers/authController')
const isAuth = require('../middleware/isAuth')
const { registerRules,validator, loginRules } = require('../middleware/validator')
const router=express.Router()


router.post('/signup',registerRules,validator,signUp);
router.post('/signin',loginRules,validator,signIn);
router.get('/current',isAuth,current);
router.delete('/deleteUser/:id',deleteUser);
router.put('/updateUser/:id',updateUser);

module.exports=router
