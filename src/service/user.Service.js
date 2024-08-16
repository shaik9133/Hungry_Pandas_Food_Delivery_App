const { getUserIdFromToken } = require("../config/jwtProvider");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports={
     async createUser(userData) {

        try {
            let {fullName,emailValue,password,} = userData;
            const isUserExist=await User.findOne({email:emailValue})

            if(isUserExist) {
                throw new Error("User already exists with email");
            }

            password=await bcrypt.hash(password, 8);

            const user = await User.create({ 
                fullName,
                email: emailValue,
                password: password,
                role  
            });

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
     },

   async getUserByEmail(userData) {
    try {
        const user=await User.findOne({ email: email });
        if(!user){
            throw new Error("User not found");
        }
        return user;
    }catch (Error) {
        throw new Error(Error.message);
    }
   },
async findUserbyId(userid){

    try {
         const user = await user.findById(userid).populate("addresses");

         if(!user){
            throw new Error("User not found with Id -",user);
         }
         return user;

    }catch (error) {
        throw new Error(error.message);
        }
    },


async findUserProfileByJwt(jwt){
   // userId

   try{
    const userId=getUserIdFromToken(jwt);
    const user=await this.findUserbyId(userId);

       return user;
   } catch (error) {
       throw new Error(error.message)
   }
},

async findAllUsers(){
    try {
         const users=await User.find();
         return users;
    } catch (error) {
        throw new Error(error.message)
    }
}
};