import mongoose from "mongoose"
import { env } from "../../lib/env"


export const dbConnect = async () => {
    try{
    const dbUrl=env.DB_URL;

     if(!dbUrl){
         console.log("DataBase url missing")
        return
     }

    console.log("Data Base connected ",dbUrl)
     mongoose.connect(dbUrl)

    }catch(error){
        console.log(error)
        process.exit(1)
    }
}