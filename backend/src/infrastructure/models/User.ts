
import mongoose from "mongoose"
import { IUser } from "../../application/domin/IUser.js"


const userSchema = new mongoose.Schema<IUser>({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String, default: "" },
    clerkId: { type: String, required: true }
}, { timestamps: true })


const User = mongoose.model("User", userSchema)

export default User