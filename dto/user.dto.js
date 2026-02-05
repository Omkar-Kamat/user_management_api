// validate user DTO
export const validateCreateUserDTO =(req,res,next) =>{
    console.log("dto")
        const {name, email} = req.body;
        if(!name || !email){
            return res.status(400).json({
                sucess:false,
                message:"Name and email are required." 
            });
        }
        console.log("Valid Data.")
        next();
}

// validate put DTO
export const validatePutUserDTO =(req,res,next) =>{
    console.log("dto")
        const {name, email} = req.body;
        if(!name || !email){
            return res.status(400).json({
                sucess:false,
                message:"Name and email are required." 
            });
        }
        console.log("Valid Data.")
        next();
}

// validate patch DTO
export const validatePatchUserDTO =(req,res,next) =>{
        const {name, email} = req.body;  
        if(!name && !email){
            return res.status(400).json({
                sucess:false,
                message:"Name and email are required." 
            });
        }
        console.log("Valid Data.")
        next();
}
