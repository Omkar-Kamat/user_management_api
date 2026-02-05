import express from "express";
import { 
    postUser, 
    getUsers, 
    patchUser, 
    deleteUser, 
    putUser, 
    getUserById
} from "../controller/userController.js";
import { checkAuth, validateUserId, validateUserIdFromBody, verifyToken } from "../middleware/user.auth.js";
import { validateCreateUserDTO, validatePutUserDTO } from "../dto/user.dto.js";

const router = express.Router()

router.get("/",checkAuth,getUsers)
router.get("/id/",verifyToken,validateUserIdFromBody,getUserById)

router.post("/",validateCreateUserDTO,postUser)

router.patch("/:id",validateUserId,patchUser)

router.put("/:id",validatePutUserDTO,putUser)

router.delete("/:id",deleteUser)

export default router;