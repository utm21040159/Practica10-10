import {Schema, model} from "mongoose"

const TeamsSchema = new Schema ([
    {
        nombre:{
            type:String,
            required:true
        }
    },

    {
        Participantes:[]
    },

    {
        Lider:{
            type:Schema.Types.ObjectId,
            required: true
        }
    },

    {
        Ronda:{
            type:Number,
            required: true
        }
    },

    {
        Calificacion:[]
    }
])

export const TeamModel = model ("Teams", TeamsSchema);  