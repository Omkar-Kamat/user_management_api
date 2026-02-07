import express from "express";
import { 
    getAllUsers, 
    getUserByEmail,
    getIsActiveByEmail,
    getIsActiveAllUsers,
    postUser, 
    patchUserByID,
    patchUserByEmail,

    deleteUserByEmail
} from "../controller/userController.js";

import { checkAuth, validateSchema, validateUserIdFromBody, verifyToken } from "../middleware/user.auth.js";
import { validateCreateUserDTO, validatePatchUserDTO, validatePutUserDTO } from "../dto/user.dto.js";
import { createUserSchema } from "../dto/user.zod.js";

const router = express.Router()

router.get("/get-all-users",getAllUsers)

router.get("/email/get-user",getUserByEmail)

router.get("/email/is-active",getIsActiveByEmail)

router.get("/is-active-all-users",getIsActiveAllUsers)

router.post("/post-user",postUser)

router.patch("/id/patch-user/:id",patchUserByID)

router.patch("/email/patch-user",patchUserByEmail)

router.delete("/email/delete-user",deleteUserByEmail)

export default router;