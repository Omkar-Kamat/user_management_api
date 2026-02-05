import express from "express";
import { 
    postUser, 
    getUsers, 
    patchUser,
    putUser, 
    getUserById,
    deleteUserById
} from "../controller/userController.js";
import { checkAuth, validateUserIdFromBody, verifyToken } from "../middleware/user.auth.js";
import { validateCreateUserDTO, validatePatchUserDTO, validatePutUserDTO } from "../dto/user.dto.js";

const router = express.Router()

router.get("/",checkAuth,getUsers)
router.get("/id/",validateUserIdFromBody,getUserById)

router.post("/",validateCreateUserDTO,postUser)

router.patch("/:id",validatePatchUserDTO,patchUser)

router.put("/:id",validatePutUserDTO,putUser)

router.delete("/:id",deleteUserById)

export default router;