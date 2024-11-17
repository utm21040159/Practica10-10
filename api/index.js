import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv"
import mongoose from "mongoose";
import UserController from "./controllers/UserController.js";
import EventsController from "./controllers/EventsController.js";
import TeamsControllers from "./controllers/TeamsControllers.js";

dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("coneccion exitosa"))



app.use(cors());
app.use(helmet());
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("get wrkng :)")
})



app.listen(4000,()=>{
    console.log("Servidor corriendo")
})

app.post("user/register", UserController.register)
app.post("user/login", UserController.login)
app.put("user/update-profile/:id", UserController.updateProfile)

//Evento
app.post("/event/create", EventsController.createEvent)

//Teams
app.post("/team/create", TeamsControllers.createTeam)
app.post("/team/EveRegister", TeamsControllers.eventRegister)
