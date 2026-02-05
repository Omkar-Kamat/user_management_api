
import { 
    createUser, 
    updateCompleteUser, 
    updatePartialUser, 
    deleteUser, 
    getUserByIdService, 
    getAllUser 
} from "../services/user.service.js";


//create user
export let postUser = (req,res)=>{
        console.log("Controller");
        const { name, email } = req.body;
        let created = createUser (name, email);
        res.status(created.status).json(created);
}

// get users
export let getUsers = (req,res)=>{
    let get = getAllUser();
    res.status(get.status).json(get);
}

// get user by id
export let getUserById = (req,res)=>{
    console.log("Controller")
    const {id} = req.body;
    let get =  getUserByIdService(id);
    res.status(get.status).json(get);
}

// update user partially
export let patchUser = (req,res)=>{
    console.log("Controller")
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
