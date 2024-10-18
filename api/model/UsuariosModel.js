import { Schema, model } from "mongoose";

const UserSchema = new Schema([
    {
        nombre:{
            type:String
        }
    },

    {
        correo:{
            type:String
        }
    },

    {
        curp:{
            type:String
        }
    },

    {
        rol:{
            type:String
        }
    }

])