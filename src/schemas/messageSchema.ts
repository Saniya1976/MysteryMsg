import {z} from "zod"

export const messageSchema=z.object({
     content:z
     .string()
     .min(15,{message:"message must be atleast 15 characters"})
     .max(300,{message:"message must not longer than  15 characters"})
})