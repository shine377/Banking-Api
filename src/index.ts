import { DataSource } from "typeorm";
import express from "express"
import { User } from "./dataEntities/User";
import { createUserRouter } from "./routs/create_user";

const app = express()

const main = async () =>{
    try {
   await new DataSource({
       type: "postgres",
       host: "localhost",
       port: 5432,
       username: "postgres",
       password: "Chlt*377",
       database: "postgres",
       entities:[User],
       synchronize:true
   })
   console.log('connected to db');
   app.use(express.json())
   app.use(createUserRouter)

   app.listen(80, () =>{
    console.log('running on port 8080');
    
   })
   
    } catch (error) {
        console.error(error);
        throw new Error('unable to connect')
        
    }
 }

main()