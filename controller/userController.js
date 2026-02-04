import {users} from "../data/users.js"

//create user
export let postUser = (req,res)=>{
    try{
        const {name, email} = req.body;
        
        // validation
        if(!name || !email){
            return res.status(400).json({
                sucess:false,
                message:"Name and email are required." 
            });
        }

        const newUser = {
            id: Date.now().toString(),
            name,
            email
        }

        users.push(newUser);

        res.status(201).json({
            success: true,
            data: newUser
        });
    }catch(error){
        res.status(500).json({
            success: false,
            data: error.message
        });
    }
}

// get users
export let getUsers = (req,res)=>{
    res.status(200).json({
        success: true,
        count: users.length,
        users: users
    })
}


// update user partially
export let patchUser = (req,res)=>{
    try{
        const {id} = req.params;
        const { name, email } = req.body;

        let user = users.find(user => user.id == id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }   
        if(name) user.name = name;
        if(email) user.email = email;
        
        res.status(200).json({
            success: true,
            data: user
        })
    }catch(error){
        res.status(500).json({
            success: false,
            data: error.message
        })
    }
}


// delete user
export let deleteUser = (req,res)=>{
    try{
        const { id } = req.params;
    
        let index = users.findIndex(user => user.id == id);
        
        if(index == -1){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }   
        
        users.splice(index,1);
        
        res.status(200).json({
            success: true,
            message: "User Deleted."
        })
    }catch(error){
        res.status(500).json({
            success: false,
            data: error.message
        })
    }
}
export let putUser = (req,res)=>{
    try{
        const {id} = req.params;
        const { name, email } = req.body;
    
        let user = users.find(user => user.id == id);
        
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        user.name = name;
        user.email = email;
        
        res.status(200).json({
            success: true,
            data: user
        })
    }catch(error){
        res.status(500).json({
            success: false,
            data: error.message
        })
    }
}
