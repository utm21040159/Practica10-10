import React, { useState } from "react";
import { Card, CardBody, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

interface IUser {
    nombre: string;
    correo: string;
    contraseña: string;
    curp: string;
    rol: string;
}

export const RegisterParticipant = () => {

    const [data, setData] = useState<IUser>({

        nombre: "",
        correo: "",
        contraseña: "",
        curp: "",
        rol: "participante"

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
            if (data) {
                data["rol"] = "participantes";
            }

            await axios.post("http://localhost:4000/user/register", data)
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
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control name="correo" onChange={onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" name="contraseña" onChange={onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>CURP:</Form.Label>
                            <Form.Control name="curp" onChange={onChange} />
                        </Form.Group>
                        
                        <Button onClick={() => onSumbit()}>ENVIAR</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>

    )
}