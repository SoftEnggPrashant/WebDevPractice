const { errorHandler } = require('../middlewares/errorHandler');
const User = require('../models/userModel');

exports.registerUser = async(req, res, next) => {
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            errorHandler(res,'inavlid credentials',400);
        }

        const user = await User.create({name,email,password});

        res.status(200).json({
            success : true,
            data : user,
            message : 'user registered successfully'
        })
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}