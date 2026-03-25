import { requireAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { IUserRepository } from "../../application/domin/IUserRepository.js";
import { UserRepository } from "../../infrastructure/repository/UserRepository.js";


export const authMiddleware = [
    requireAuth(),
    async (req: Request, res: Response, next: NextFunction) => {
        const { userId } = req.auth();
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const userRepo = container.resolve<IUserRepository>(UserRepository)
        const user = await userRepo.findByClerkId(userId)
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;

        next();


    }


];





