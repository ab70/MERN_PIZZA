//import schema
const User = require('../models/User')

//security packages
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')



function userControllers(){
    return{
        //signup
        /**
         * It takes the user's email and password, encrypts the password, and saves the user to the
         * database.
         */
        async registerUser(req,res){
            const newUser = new User({
                username: req.body.userName,
                email: req.body.userEmail,
                password:  CryptoJS.AES.encrypt(req.body.userPass, process.env.SECRET_key),
                address: req.body.userAddress
             })
             
             try {
               const findUser = await User.find({email: newUser.email})

               if (!findUser) {
                  const saveUser = await newUser.save();
                  res.status(200).json({message: "user registered", user: saveUser})
               }
               else{
                  res.status(403).json({message: "User Already Exists"})
               }
               
             }
             catch (err) {
                console.log(err)
                res.status(400).json({message: 'User not registered'})
             }
        },
        //login method
        async userLogin(req,res){
            try {
                const user = await User.findOne({email:req.body.email});
                if(!user){
                   //res.status(400).json("No account Exists on this email");
                   res.status(400).json({message: "user didnt found"})
                }
                
                else{
                   const hasedPass = CryptoJS.AES.decrypt(user.password, process.env.SECRET_key).toString(CryptoJS.enc.Utf8);
                   if(hasedPass!==req.body.password){
                      res.status(400).json({message: 'Pass or email didnt match'});
                   }
                   if(hasedPass==req.body.password){
                     // return res.status(200).json("Logged in");
                       
                       const token = jwt.sign({id: user._id, role: user.isAdmin}, process.env.jsonSec,{expiresIn:'1h'});
                        res.cookie('jwt_token', token );
                      //This is used to seperate password from the response or json
                      const  { password, ...others } = user._doc;
                      //console.log(others) //here printing that excluded value
                      res.status(200).json({message:"User logedin",userDetails: others})
                   }
                }
                
             }
             catch(err){
                res.render('login',{success:'Failed to login account.', title: "login"})
             }
        }

    }//return
}//main function

module.exports = userControllers