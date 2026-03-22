import express from "express";
import morgan from "morgan";
import { env } from "./lib/env.ts";
import { dbConnect } from "./infrastrure/config/db.ts";

const app = express();
app.use(morgan("dev"));



const StartServer = async () => {
    await dbConnect()
    app.listen(env.PORT, () => {
        console.log(`server running on port ${env.PORT}`);
    });

}



StartServer()
