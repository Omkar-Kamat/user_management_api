import express from "express";
import { 
    getAllPosts, 
    postPost 
} from "../controller/postController.js";

const router = express.Router()

router.get("/get-all-posts",getAllPosts)

router.post("/post-post",postPost)

export default router;