import { z } from "zod";

export const createUserSchema = z.object({
    username: z.string().min(4).max(20),
    password: z.string().min(6),
    name: z.string().min(2)
});

export const signInSchema = z.object({
    username: z.string().min(4).max(20),
    password: z.string().min(6),
    name: z.string().min(2)
});

export const createRoomSchema = z.object({
    roomName: z.string().min(3).max(20),
})