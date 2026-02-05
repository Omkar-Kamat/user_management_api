import {z} from "zod";

export const userSchema = z.object({
    name: z.string().min(2,"Name is too short"),
    email: z.email("Invalid email format")
})

export const createUserSchema = z.object({
    name: z.string().min(2,"Name is too short"),
    email: z.email("Invalid email format")
})

export const updateUserSchema = z.object({
    name: z.string().min(2).optional(),
    email: z.email().optional()
})

