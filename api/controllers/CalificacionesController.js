import { EventsModel } from "../model/EventsModel.js";
import {CalificacionesModel} from "../model/CalificacionesModel"


export default {
    createGrade: async (req, res) => {
        try {
            const idEquipos = req.params.id_Equipo
            const group = await TeamsModel.findById(id_Equipo)
            if (!group) {
                return res.status(400).json({ msg: "grupo no encontrado" })
            }
            const round = req.body.ronda
            if (!round) {
                return res.status(400).json({ msg: "ronda invalida" })
            }
            const id_Event = req.params.id_evento
            const event = await EventsModel.findById(id_evento)
            if (!event) {
                return res.status(400).json({ msg: "evento no encontrado" })
            }
            if (event.groups.includes(group._id)) {
                return res.status(400).json({ msg: "no hay correlacion entre el grupo y el evento" })
            }
            gradesFromDb.Calificaciones.filter((grade) => {
                grade.id_judge == req.body.id_judge
            })
            const grades = req.body.Calificaciones
        } catch (error) {
        }
    }
}