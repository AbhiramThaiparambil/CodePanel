import express from "express";
import morgan from "morgan";
import { env } from "./lib/env.ts";



const app = express();
app.listen(env.PORT, () => {
    console.log(`server running on port ${env.PORT}`);
});

app.use(morgan("dev"));
