import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userdbSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false,
        },
        age: {
            type: Number,
            min: 0,
            max: 120,
            validate: {
                validator: Number.isInteger,
                message: "Age must be an integer",
            },
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

// HASHING PASSWORD BEFORE SAVE - MIDDLEWARE HOOK
userdbSchema.pre("save", async function (next){
    console.log("HASHING PASSWORD");
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10);
    next();
})

const User = mongoose.model("User", userdbSchema);
export default User;
