const { errorHandler } = require('../middlewares/errorHandler');
const Blogs = require('../models/BlogModel');

exports.blogLiked = async(req,res,next)=>{
    try{
        const {userId,blogId} = req.body;

        if(!userId || !blogId){
            errorHandler(res,'provide credentials',400);
        }

        const blog = await Blogs.findById({_id:blogId});

        if(!blog){
            errorHandler(res,'Not Found',404);
        }

        if(blog.likes.length !== 0 && blog.likes.some(likedUser => likedUser.userId == userId)){
            errorHandler(res,'Already Liked by this user',400);
        }
        else{

            blog.likes.push({userId});

            await blog.save({validateBeforeSave:false});
    
            res.status(200).json({
                success: true,
                message : 'Your blog has been liked'
            })
        }
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

exports.removeLike = async(req,res,next)=>{
    try{
        const {userId,blogId} = req.body;

        if(!userId || !blogId){
            errorHandler(res,'provide credentials',400);
        }

        const blog = await Blogs.findById({_id:blogId});

        if(!blog){
            errorHandler(res,'Not Found',404);
        }

        if(blog.likes.length !== 0 && blog.likes.some(likedUser => likedUser.userId == userId)){
            blog.likes = blog.likes.filter(likedUser => likedUser.userId != userId);

            await blog.save({validateBeforeSave:false});
    
            res.status(200).json({
                success: true,
                message : 'Your blog has been Unliked'
            })
        }
        else{
            errorHandler(res,'The is user are not liked this blog',400);
        }
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}


exports.dislikeBlog = async (req,res,next)=>{
    try{
        const userId = req.params.id;
        const {blogId} = req.body;

        if(!userId || !blogId){
            errorHandler(res,'provide the credentials',400);
        }

        const blog = await Blogs.findById({_id:blogId});

        if(!blog){
            errorHandler(res,'NOT Found',404);
        }

        if( blog.dislikes.length !== 0 &&  blog.dislikes.some((dislikes)=> dislikes.userId == userId)){
            errorHandler(res,'Already DisLiked by this user',400);
        }
        else{

            blog.dislikes.push({userId});
            console.log(blog.dislikes);
            await blog.save({validateBeforeSave:false});

            res.status(200).json({
                success: true,
                message : 'user dislike successfully completed'
            })
        }

    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

exports.removeDislike = async(req,res,next)=>{
    try{
        const userId = req.params.id;
        const {blogId} = req.body;

        if(!userId || !blogId){
            errorHandler(res,'provide the credentials',400);
        }

        const blog = await Blogs.findById({_id:blogId});

        if(!blog){
            errorHandler(res,'NOT Found',404);
        }

        if( blog.dislikes.length !== 0 &&  blog.dislikes.some((dislikes)=> dislikes.userId == userId)){
            
            blog.dislikes = blog.dislikes.filter((dislikes)=> dislikes.userId != userId)

            await blog.save({validateBeforeSave:false});

            res.status(200).json({
                success: true,
                message : 'user dislike successfully removed'
            })
        }
        else{
            errorHandler(res,'The use not a dislike',400);
        }

    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

