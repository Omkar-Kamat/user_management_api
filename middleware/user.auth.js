//verify token
export const verifyToken= (req,res,next)=>{
    console.log("auth")
    const { authorization } = req.headers;
    if(authorization){
        console.log(authorization);
    }else{
        console.log("No token.")
    }
    next();
}

// checkAuth
let success = true;
export const checkAuth = (req,res,next)=>{
    console.log("auth")
    if(success){
        console.log("Auth Checked");
    }else{
        console.log("Auth Failed");
        return res.status(400).json({
            success: success,
            message: "Auth Failed."
        })
    }
    next();
}

// validate user by id from params
export const validateUserId =(req,res,next) =>{
    console.log("auth")
    const { id } = req.params;
    
    if(!id || id.length < 5){
        return res.status(400).json({
            sucess:false,
            message:"Invalid ID" 
            });
        }
        console.log("Valid ID")
        next();
}

    
    // validate user by id from body
export const validateUserIdFromBody =(req,res,next) =>{
        console.log("auth")
        const { id } = req.body;
        
        if(!id || id.length < 5){
            return res.status(400).json({
                sucess:false,
                message:"Invalid ID" 
            });
        }
        console.log("Valid ID")
        next();
}



// validate schema
export const validateSchema = (schema) => (req,res,next) =>{
    try{
        console.log("schema")
        let result = schema.safeParse(req.body);
        if(!result.success) throw new Error("Schema Not Valid.")
        req.body = result.data;
    }catch(err){
        return res.status(400).json({
            success: false,
            error: err.message
        })
    }
    next();
}