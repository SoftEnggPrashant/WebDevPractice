const Comments = require('../models/BlogCommentModel');
const errorHandler = require('../middlewares/errorHandler');

exports.createComment = async(req,res,next)=>{
    try{

        const { comment,user,blog,rating} = req.body;

        if(!comment || !user || !blog){
            errorHandler(res,'please provide valid data',400);
        }

        await Comments.create({comment,user,blog,rating});

        res.status(200).json({
            success: true,
            message: 'Comment created',
        })
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

exports.getAllComments = async(req,res,next)=>{
    try{
        const blogId = req.params.id;

        if(!blogId){
            errorHandler(res,'blogId not present',400);
        }

        const allComment = await Comments.find({blog:blogId});

        res.status(200).json({
            success:true,
            message : 'successfully get all comments for this blog',
            data : allComment
        })
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

exports.updateComment = async(req,res,next)=>{
    try{
        const commentId = req.params.id;

        const { comment,rating } = req.body;

        const commentData = await Comments.findByIdAndUpdate(commentId,{comment,rating,updatedAt:Date.now()});

        if(!commentData){
            errorHandler(res,'provide valid credentials',400);
        }

        res.status(200).json({
            success:true,
            message:'comment update successfully',
        })
        
    }
    catch(error){
        console.log(error.message);
        errorHandler(res,error.message,500);
    }
}

exports.deleteComment = async(req,res,next)=>{
    try{
        const commentId = req.params.id;

        if(!commentId){
            errorHandler(res,'Not Found',404);
        }

        await Comments.findByIdAndDelete({_id:commentId});

        res.status(200).json({
            success:true,
            message:'Comment deleted successfully'
        })
    }
    catch(error){
        console.log(error.message);
        errorHandler(res,error.message,500);
    }
}
