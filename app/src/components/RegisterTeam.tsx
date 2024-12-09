import React, { useState } from "react";
import { Card, CardBody, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { ITeams } from "../Types";



export const RegisterTeam = () => {

    const [data, setData] = useState<ITeams>({

        nombre: "",
        Participantes:  [],
        Lider: "",
        Ronda: 0 ,
        Calificacion: []

    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const tempoData: any = data;
        tempoData[e.target.name] = e.target.value;
        setData(tempoData)
    }

    const onSumbit = async () => {
        try {
            Swal.fire("Guardando datos");
            Swal.showLoading();
            

            await axios.post("http://localhost:4000/team/create", data)
            Swal.fire("Datos Guardados Correctamnete")
        } catch (error: any) {
            console.log(error)
            Swal.fire("Algo salio mal", error.response.data.msg);
        }
        
    }
    return (

        <Container>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control name="nombre" onChange={onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Participantes:</Form.Label>
                            <Form.Control name="Participantes" onChange={onChange} />
                            <Form.Control name="Participantes" onChange={onChange} />
                            <Form.Control name="Participantes" onChange={onChange} />
                            <Form.Control name="Participantes" onChange={onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lider:</Form.Label>
                            <Form.Control  name="Lider" onChange={onChange} />
                        </Form.Group>
                                               
                        <Button onClick={() => onSumbit()}>ENVIAR</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>

    )
}