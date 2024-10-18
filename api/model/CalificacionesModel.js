import { Schema, model } from "mongoose";

const CalifSchema = new Schema ([
    {
        id_Equipo:{
            type:Schema.Types.ObjectId,
            required:true
        }
    },

    {
        id_ronda:{
            type:Schema.Types.ObjectId,
            required:true
        }
    },

    {
        id_evento:{
            type:Schema.Types.ObjectId,
            required:true
        }
    },

    {
        Calificacion:[
            {
                id_metricas:{
                    type:Schema.Types.ObjectId,
                    required:true
                }
            }
        ]
    }
])

export const CalifModel = model("Calificaciones", CalifModel)