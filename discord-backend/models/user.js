const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
    mail: { type: String, unique: true },
    username: { type: String }, 
    password: { type: String },
}); 

// mongoose.model('User', UserSchema); registers our schema with mongoose. Our user model can then be accessed anywhere in our application by calling mongoose.model('User').

module.exports=mongoose.model("user", userSchema); 