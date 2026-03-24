import dotenv from "dotenv";
dotenv.config();

export const env = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_SECREt: process.env.STREAM_SECREt

};