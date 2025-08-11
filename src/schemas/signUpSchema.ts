import {z} from "zod"

export const usernameValidation=z
      .string()
      .min(2,"username must be atleast 2 characters")
      .max(15,"username must be no more than 15 characters")
      .regex(/^[a-zA-Z0-9_]{2,15}$/,"Username must be 2–15 characters and contain only letters, numbers, or underscores.")


export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({
     message:"invalid email address"
    }),
    password:z.string().min(6,{message:"password must be atleast 6 characters"})
})