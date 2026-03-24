import { injectable } from "tsyringe";
import { IUser } from "../../application/domin/IUser";
import { IUserRepository } from "../../application/domin/IUserRepository";
import { CreateUserDTO } from "../../application/dto/CreateUserDTO";
import UserModel from "../models/User";

@injectable()
export class UserRepository implements IUserRepository {
    async create(dto: CreateUserDTO): Promise<IUser> {
        const created = await UserModel.create({
            userName: dto.userName,
            email: dto.email,
            password: dto.password,
            clerkId: dto.clerkId,
            profileImage: dto.profileImage ?? "",
        });

        return this.toEntity(created);
    }

    async delete(userId: string): Promise<boolean> {
        const result = await UserModel.findByIdAndDelete(userId);
        return result !== null;
    }

    async findById(userId: string): Promise<IUser | null> {
        const doc = await UserModel.findById(userId).lean();
        return doc ? this.toEntity(doc) : null;
    }

    async findByEmail(email: string): Promise<IUser | null> {
        const doc = await UserModel.findOne({ email }).lean();
        return doc ? this.toEntity(doc) : null;
    }

    // ─── mapping ────────────────────────────────────────────────────────────
    private toEntity(doc: any): IUser {
        return {
            id: doc._id.toString(),
            userName: doc.userName,
            email: doc.email,
            profileImage: doc.profileImage ?? "",
            password: doc.password,
            clerkId: doc.clerkId,
        };
    }
}