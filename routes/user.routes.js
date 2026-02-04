import express from "express";
import { 
    postUser, 
    getUsers, 
    patchUser, 
    deleteUser, 
    putUser 
} from "../controller/userController.js";

const router = express.Router()

router.post("/",postUser)
router.get("/",getUsers)
router.patch("/:id",patchUser)
router.put("/:id",putUser)
router.delete("/:id",deleteUser)

export default router;