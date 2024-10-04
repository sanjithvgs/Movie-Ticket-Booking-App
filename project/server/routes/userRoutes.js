const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

// Route for Register

router.post('/register', async(req, res)=>{

    try{

        const userExists = await User.findOne({email:req.body.email})
        
        if (userExists){
            res.send({
                success: false,
                message: 'User already Exists'
            })
        }

        //Hash the password

        const salt = await bcrypt.genSalt(11)

        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword


        const newUser = await User(req.body)    
        await newUser.save()
    
        res.send({
            success : true,
            message : "User registered successfully"
        })

    }catch(error){
        console.log(error)
    }

})


router.post('/login', async(req, res)=>{
    try{

        const user = await User.findOne({ email: req.body.email}) 

        if(!user){
            return res.send({
                success: false,
                message: "User not found, please Register"
            })
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!validPassword){
            return res.send({
                success: false,
                message: "Incorrect Password"
            })
        }

        const token = jwt.sign({userId : user._id}, `${process.env.SECRET_KEY}`, {expiresIn: "1d"})
        
        res.send({
            success: true,
            user : user,
            message: "User Logged in",
            token: token
        })

    

    }catch(error){
        console.log(error)
    }
})

module.exports = router
