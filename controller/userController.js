import {users} from "../data/users.js"
import { createUser, updateCompleteUser, updatePartialUser, deleteUser } from "../services/user.service.js";
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
    const {id} = req.params;
    const { name, email } = req.body;
    let update = updatePartialUser(id,name,email);
    return res.status(update.status).json(update);
}


// delete user
export let deleteUserById = (req,res)=>{
    console.log("Controller")
    const {id} = req.params
    let deleted = deleteUser(id);
    return res.status(deleted.status).json(deleted);
}


//put user
export let putUser = (req,res)=>{
    console.log("Controller")
    const {id} = req.params
    const {name, email} = req.body
    let update = updateCompleteUser(id,name,email);
    return res.status(update.status).json(update);
}
