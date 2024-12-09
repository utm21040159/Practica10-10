import { EventsModel } from "../model/EventsModel.js"


const validateEvent =(metrics,nombre,max_round)=>{
    const data ={
        isValid:false,
        msg:""
    }

    if (!Array.isArray(metrics)){
       data.msg= "Metricas no es un arreglo"
       return data;
    }

    if (!(metrics.length>0)){
        data.msg= "Metricas esta vacio "
        return data;
     }

     
     const incompleted_metrics = metrics.filter((metric) => (!metric.description) || (!metric.max_points))

       
        if (incompleted_metrics.length > 0) {
            data.msg = "Alguna metrica esta vacia"
            return data
        }
            
        const invalidMetrics = metrics.filter(
            (metric) =>
                metric.descirpcion.length === 0 || metric.max_points === 0);
        
    
        if (invalidMetrics.length > 0) {
            data.msg = "alguna de las metricas es invalida"
            return data
        }
        if (!req.body.nombre && !req.body.nombre.length) {
            data.msg = "el nombre del evento esta vacio"
            return data
        }
        if (!max_round) {
            data.msg = "num maxico de rondas invalido"
            return data
        }
        data.isValid = true
        return data
    }
       
    


    


export default {
    createEvent: async (req, res) => {
        try {
            const {metrics,nombre,max_round}= req.body
           const data = validateEvent(metrics, nombre, max_round)
           if(!isValid){
            return res.status(400).json({msg})
           }
            const event = {
                nombre: req.body.nombre,
                metrics: metrics,
                max_round: req.body.max_round
            }

            await EventsModel.create(event)
            res.status(200).json({ "status": "se creo bien el evento" })

        } catch (err) {

            res.status(500).json({ "status": "un Checale" })
            console.log(err)

        }
    },

    updateEvent: async(res, req)=>{
        try {
            const idEvent = req.params.id;
        const event = await EventsModel.findById(idEvent);
        if(!event){
            return res.status(400).json({msg: "Elevento no existe"})
        }
        const {metrics,nombre,max_round}= req.body
           const data = validateEvent(metrics, nombre, max_round)
           if(!isValid){
            return res.status(400).json({msg})
           }
           await EventsModel.findByIdAndUpdate(idEvent,{
            $set:{
                metrics,
                nombre,
                max_round
            }
           })
        } catch (error) {
            res.status(500).json({ "status": "un Checale" })
        }
    },

    changeStatus: async (req, res)=>{

        try {
            const idEvent = req.params.id;
        const event = await EventsModel.findById(idEvent)
        if(!event){
            return res.status(400).json({msg: "No encontrado"})
        }

        if(!["pending", "active", "done"].includes(req.body.status.toLowerCase())){
            return res.status(400).json({msg:"No esta bien"})
        }
        await EventsModel.findByIdAndUpdate(idEvent,{
            $set:{
                status:req.body.status
            }
        });
        return res.status(200).json({msg:"si"})
        } catch (error) {
            res.status(500).json({ "status": "un Checale" })
        }

        
    },

    changesRound: async (res, req)=>{
        try {
            const idEvent = req.params.id;
        const event = await EventsModel.findById(idEvent)
        if(!event){
            return res.status(400).json({msg: "No encontrado"})
        }

        const teamsPerRound = req.query.maxTeams ? req.query.maxTeams : 5;


        const {grupos} = event;
        const gradesPerMetrics=[];
        for(const grupo of grupos){
            const {Calificaciones} = await CalificacionesModel.findOne({id_Evento: event._id, id_Equipo: grupo})


            const alreadyChecked = []
            

            for(const Calificacion of Calificaciones){
                const filteredGrades = Calificaciones.filter(item=>
                    Calificacion.id_metrics === item.id_metrics && !alreadyChecked.includes(grades.id_metrics)
                )
                console.log(filteredGrades)
                let gradePerMetric = 0
                if(filteredGrades.length > 0){
                    gradePerMetric = filteredGrades.reduce((a,b)=>a.Calificacion + b.Calificacion)
                }
                if(!alreadyChecked.includes(Calificacion.id_metrics)){
                    alreadyChecked.push(filteredGrades[0].id_metrics)
                    gradesPerMetrics.push({
                        id_metrics:Calificacion.id_metrics,
                        Calificacion:gradesPerMetrics
                    })
                }
                const finalGrades = gradesPerMetrics.reduce((a,b)=>a.grade + b.grade)
                console.log(gradePerMetric)
            }
        }

        } catch (error) {
            res.status(500).json({ "status": "un Checale" })
        }
        
    }
}