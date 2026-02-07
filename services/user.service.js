import User from "../models/user.js"



// GET ALL USERS SERVICE
export const getAllUsersService = async () =>{
    console.log("GET ALL USERS SERVICE")
    let users = await User.find().sort({age: 1});
    return users;
}

// GET USER BY EMAIL SERVICE
export const getUserByEmailService = async (email) =>{
    console.log("GET USER BY EMAIL SERVICE")
    let user = await User.findOne({email: email});
    return user;
}

// GET IF USER IS ACTIVE BY EMAIL
export const getIsActiveByEmailService = async (email) =>{
    console.log("GET IF USER IS ACTIVE BY EMAIL")
    let user = await User.findOne({email: email}).select("isActive");
    if(!user) return null;
    return user.isActive;
}

// GET ALL ACTIVE USERS
export const getIsActiveAllUsersService = async () =>{
    console.log("GET ALL ACTIVE USERS SERVICE")
    let users = await User.find({isActive: true});
    return users;
}

// POST NEW USER
export const postUserService = async ({ name, email, age, password, role }) => {
    console.log("POST NEW USER SERVICE")
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    
    const user = await User.create({
        name,
        email,
        age,
        password,
        role,
    });
    
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        role: user.role,
        isActive: user.isActive,
        createdAt: user.createdAt,
    };
};

// PATCH USER BY ID
export const patchUserByIDService = async (id, updates) => {
    console.log("PATCH USER BY ID SERVICE")
    return await User.findByIdAndUpdate(
        id,
        { $set: updates },
        {
            new: true,
            runValidators: true,
            select: "-password",
        }
    );
};

// PATCH USER BY EMAIL
export let patchUserByEmailService = async (email,updates) =>{
    console.log("PATCH USER BY EMAIL SERVICE")
    return await User.updateOne({email: email},updates);
}

// DELETE USER BY EMAIL
export let deleteUserByEmailService = async (email) =>{
    console.log("DELETE USER BY EMAIL SERVICE")
    return await User.deleteOne({email: email});
} 