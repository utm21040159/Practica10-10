import axios from "axios"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { IEvent, ITeams, IUser } from "../Types"
import { Card, Table } from "react-bootstrap"


interface props{
    entity: "user"| "teams"| "event"
}

export const ShowList = ({entity}: props) =>{
    const [data, setData] = useState([])

    useEffect(() =>{

        getData()

    }, [])

    function getKeys<T>(){
        return Object.keys({}) as (keyof T)[]
    } 

    const getData = async ()=>{
        try {
            
            const {data} = await axios.get("http://localhost:4000"+ entity + "/list")
            setData(data)
        } catch (error) {
            Swal.fire("Opps Ocurrio un error", "No se optuvieron los datos de la tabla ")
        }
    }

    const getColums = () =>{
        let columns = [];
        if(entity == "event"){
            columns = getKeys<IEvent>();
        }else if (entity == "teams"){
            columns = getKeys<ITeams>()
        }else{
            columns = getKeys<IUser>()
        }

        const HTMLColumns = columns.map((c) =>(
            <th>{c}</th>
        ))

        return HTMLColumns;
    }

    return(
        <Card>
            <Card.Body>
                <Card.Title> listado de {entity}</Card.Title>

                <Table>
                    <thead>
                        {getColums()}
                    </thead>
                    <tbody>
                        {
                            data.map((datum) =>(
                                <tr>
                                    <td>{datum}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}