import {Schema, model} from "mongoose"

const TeamsSchema = new Schema ([
    {
        nombre:{
            type:String,
            required:true
        }
    },

    {
        Participantes:[
            {
                type:Schema.Types.ObjectId

            }
        ]
    },

    {
        Lider:{
            type:Schema.type.ObjectId
        }
    },

    {
        Ronda:{
            type:Number
        }
    },

    {
        Calificacion:{
            type:Schema.type.ObjectId
        }
    }
])

export const TeamsModel = model ("Teams", TeamsModel);  