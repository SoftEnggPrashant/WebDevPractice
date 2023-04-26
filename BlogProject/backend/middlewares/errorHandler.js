exports.errorHandler = (res,message,code)=>{

    res.status(code).json({
        success:false,
        error:message,
    })
}