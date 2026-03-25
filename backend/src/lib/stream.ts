import { StreamChat } from "stream-chat";
import { env } from "./env.js"
import { UserJSON } from "@clerk/express";

if (!env.STREAM_API_KEY || !env.STREAM_SECREt) {
    throw new Error("Missing Stream API key or secret");
}

const chatClient = StreamChat.getInstance(
    env.STREAM_API_KEY,
    env.STREAM_SECREt,
);



export const upsertStreamUser = async (userData: UserJSON) => {
    try {

        const data = {
            id: userData.id,
            banned: userData.banned,
            image: userData.image_url,
            name: userData.first_name || "" + userData.last_name || "",
            email: userData.email_addresses[0].email_address,
        }
        await chatClient.upsertUser(data)

    } catch (error) {
        console.log(error)
    }
}

export const deleteStreamUser = async (userId: string) => {
    try {
        await chatClient.deleteUser(userId)

    } catch (error) {
        console.log(error)
    }
}