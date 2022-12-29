const User=require("../../models/user"); 
const bcrypt = require("bcryptjs"); 

const postRegister= async(req,res) => {
    try{
        const{ username, mail, password }=req.body; 
        // check if user exists 
        const userExists= await User.exists({ mail: mail.toLowerCase()});
        
        if (userExists){
            return res.status(409).send('Email already in use.'); 
        } 

        // encrypt the password
        
        const encryptedPassword = await bcrypt.hash(password,10); 

        // create user document and save it in the database 

        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password:encryptedPassword
        });

        // create JWT Token 

        const token='JWT TOKEN'; 

    } catch(err){
        return res.status(500).send('Error Occured. Please try again'); 
    }
};

module.exports=postRegister; 
