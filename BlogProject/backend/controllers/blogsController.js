const Blogs = require('../models/BlogModel');
const errorHandler = require('../middlewares/errorHandler');

exports.createBlog = async(req,res,next)=>{
    try{

        const {title,description,userId} = req.body;

        if(!title || !description || !userId){
            errorHandler(res,'please provide a title , description and userId');
        }

        const blog = await Blogs.create({title:title,description:description,user:userId});

        res.status(200).json({
            success: true,
            data : blog,
            message : 'created successfully'
        })

    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

exports.getAllBlogs = async(req,res,next)=>{
    try{

        const blogs = await Blogs.find({});
        if(!blogs){
            errorHandler(res,'Not Found',404);
        }

        res.status(200).json({
            data : blogs,
            success:true,
            message : 'get All blogs successfully'
        })
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

exports.getBlogById = async(req,res,next)=>{
    try{
        const {id} = req.params;

        const blog = await Blogs.findById({_id:id});
        
        if(!blog){
            errorHandler(res,'Not Found',404);
        }

        res.status(200).json({
            success:true,
            data : blog,
            message : 'Blog find successfully'
        })
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

exports.updateBlog = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        
        if(!title || !description){
            errorHandler(res,'please provide title and desciption',500);
        }

        await Blogs.findByIdAndUpdate(id,{
            title,
            description,
            updatedAt: Date.now()
        })

        res.status(200).json({
            success:true,
            message : 'Blog updated successfully'
        })
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}

exports.deleteBlog = async(req,res,next)=>{
    try{
        const {id} = req.params;

        if(!id){
            errorHandler(res,'please provide blog id',500);
        }

        await Blogs.findByIdAndDelete({_id:id});

        res.status(200).json({
            success:true,
            message: 'Blog deleted successfully'
        })
    }
    catch(error){
        errorHandler(res,error.message,500);
    }
}