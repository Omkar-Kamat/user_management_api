import {users} from "../data/users.js"
import { createUser, updateCompleteUser } from "../services/user.service.js";
//create user
export let postUser = (req,res)=>{
        console.log("Controller")
        const { name, email } = req.body;
        let created = createUser (name, email);
        res.status(created.status).json(created);
}

// get users
export let getUsers = (req,res)=>{
    res.status(200).json({
        success: true,
        count: users.length,
        users: users
    })
}

// get user by id
export let getUserById = (req,res)=>{
     try{
        const {id} = req.body;

        let user = users.find(user => user.id == id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        } 
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
    console.log("Controller")
    const {id} = req.params
    const {name, email} = req.body
    let update = updateCompleteUser(id,name,email);
    return res.status(update.status).json(update);
}
