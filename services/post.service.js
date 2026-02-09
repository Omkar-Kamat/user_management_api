import Post from "../models/post.js";

// GET ALL POSTS SERVICE
export const getAllPostsService = async () =>{
    console.log("GET ALL POSTS SERVICE")
    let posts = await Post.find().populate("user","name email");
    return posts;
}

// POST NEW POST SERVICE
export const postPostService = async ({ title, content, user}) => {
    console.log("POST NEW POST SERVICE")
    const post = await Post.create({
        title : title,
        content : content,
        user : user
    });

    return post;
};