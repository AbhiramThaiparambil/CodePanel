import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import { env } from "./lib/env.js";
import { dbConnect } from "./infrastructure/config/db.js";
import "./infrastructure/config/container.js";
import { serve } from "inngest/express";
import { inngest } from "./infrastructure/config/inngest.js";
import { functions } from "./lib/inngest.js";
import { clerkMiddleware } from '@clerk/express'

const app = express();
app.use(morgan("dev"));
app.use(express.json())
app.use(clerkMiddleware())

app.use(
    "/api/inngest",
    serve({
        client: inngest,
        functions,
        signingKey: env.INNGEST_SIGNING_KEY,


    })
);




const StartServer = async () => {
    await dbConnect()
    app.listen(env.PORT, () => {
        console.log(`server running on port ${env.PORT}`);
    });

}



StartServer()




