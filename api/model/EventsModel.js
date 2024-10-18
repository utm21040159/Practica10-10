import { Schema, model } from "mongoose";

const EventSchema = new Schema([
    {
        metrics:[
            {
                descripcion:{
                    type:String,
                    required:true
                },
                max_point:{
                    type:Number,
                    required:true
                }
            }
        ]
    },
    {
        round:{
            type:Number,
            required:true
        }
    },

    {
        status: {
            type:Schema.Types.ObjectId,
            enum:["pending", "active", "done"],
            lowercase:true,
            required:true
        }
    },

    {
        groups:[]
    },

    {
        judges:[]

    }

]);

export const EventModel = model("events",EventModel)