import {users} from "../data/users.js"

// create user logic
export const createUser = (name,email) =>{
    console.log("service")
    try{
        const newUser = {
            id: Date.now().toString(),
            name, 
            email
        }
        users.push(newUser);
        
        return {
            status:200,
            success: true,
                data: newUser
            };
    }catch(err){
        return {
                status:500,
                success: false,
                error: err.message
            };
    }
}


// put user
export let updateCompleteUser = (id,name,email) =>{
    console.log("service")
        try{      
        let user = users.find(user => user.id == id);
        
        if(!user){
            return {
                status:404,
                success: false,
                message: "User not found"
            }
        }
        
        user.name = name;
        user.email = email;
        
        return {
            status:200,
            success: true,
            data: user
        }
    }catch(err){
        return {
            status: 500,
            success: false,
            message: err.message
        }
    }
}