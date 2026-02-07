
import { 
    getAllUsersService, 
    getUserByEmailService, 
    getIsActiveByEmailService,
    getIsActiveAllUsersService,
    postUserService, 
    patchUserByIDService,
    patchUserByEmailService,
    deleteUserByEmailService
} from "../services/user.service.js";



// GET ALL USERS CONTROLLER
export const getAllUsers = async (req, res) => {
    console.log("GET ALL USERS CONTROLLER");

    try {
        const users = await getAllUsersService();
        return res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        console.error("Error fetching users:", error);

        return res.status(500).json({
            success: false,
            message: error?.message || "Internal Server Error",
        });
    }
};

// GET USER BY EMAIL CONTROLLER
export const getUserByEmail = async (req, res) => {
    console.log("GET USER BY EMAIL CONTROLLER");

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const user = await getUserByEmailService(email);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: user,
        });

    } catch (error) {
        console.error("Error fetching user by email:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// GET IS ACTIVE BY EMAIL CONTROLLER
export const getIsActiveByEmail = async (req, res) => {
    console.log("GET IS ACTIVE BY EMAIL CONTROLLER");

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const isActive = await getIsActiveByEmailService(email);

        if (isActive === null) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: {
                email,
                isActive,
            },
        });

    } catch (error) {
        console.error("Error checking user active status:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// GET ALL ACTIVE USERS CONTROLLER
export const getIsActiveAllUsers = async (req, res) => {
    console.log("GET ALL ACTIVE USERS CONTROLLER");

    try {
        const activeUsers = await getIsActiveAllUsersService();

        return res.status(200).json({
            success: true,
            data: activeUsers,
            count: activeUsers.length,
        });

    } catch (error) {
        console.error("Error fetching active users:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// POST USER CONTROLLER
export const postUser = async (req, res) => {
    console.log("POST USER CONTROLLER");

    try {
        const { name, email, age, password, role } = req.body;

        if (!name || !email || !password || !age) {
            return res.status(400).json({
                success: false,
                message: "Name, email, age and password are required",
            });
        }

        const user = await postUserService({
            name,
            email,
            age,
            password,
            role,
        });

        return res.status(201).json({
            success: true,
            data: user,
        });
    } catch (error) {
        console.error("Error creating user:", error);

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};

// PATCH USER BY ID CONTROLLER
export const patchUserByID = async (req, res) => {
    console.log("PATCH USER BY ID CONTROLLER");

    try {
        const { id } = req.params;
        const updates = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }

        const user = await patchUserByIDService(id, updates);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: user,
        });

    } catch (error) {
        console.error("Error updating user:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// PATCH USER BY EMAIL CONTROLLER
export let patchUserByEmail = async (req,res)=>{
    console.log("PATCH USER BY EMAIL CONTROLLER")
    try {
        const { email } = req.body;
        const updates = req.body.updates;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }

        const user = await patchUserByEmailService(email, updates);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: user,
        });

    } catch (error) {
        console.error("Error updating user:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

// DELETE USER BY EMAIL CONTROLLER
export const deleteUserByEmail = async (req, res) => {
    console.log("DELETE USER BY EMAIL CONTROLLER");

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const deletedUser = await deleteUserByEmailService(email);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });

    } catch (error) {
        console.error("Error deleting user:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
