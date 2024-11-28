import { useState } from "react";
import { Card, Col, Row, Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";


interface Event {
    nombre: string;
    metrics: [0];
    max_round: number;
}

export const CreateEvent = () => {

    const [event, setEvent] = useState<Event>({

        nombre: "",
        metrics: [0],
        max_round: 0

    });

    const agregarMetric = () => {
        const add = event;
        add.metrics.push();
        setEvent({ ...add })
    }

    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    //     const tempoEvent: any = event;
    //     tempoEvent[e.target.name] = e.target.value;
    //     setevent(tempoEvent)
    // }

    const onSumbit = async () => {
        try {
            Swal.fire("Guardando datos");
            Swal.showLoading();

            await axios.post("http://localhost:4000/event/create", event)
            Swal.fire("Datos Guardados Correctamnete")
        } catch (error: any) {
            console.log(error)
            Swal.fire("Algo salio mal", error.response.event.msg);
        }
    }

    return (
        <Container >
            <Card style={{ margin: "auto" }}
            >
                <Card.Body>
                    <Card.Title > EVENTO </Card.Title>
                    <Row>
                        <Col>
                            <Form.Group >
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control className="mb-5" name="nombre" ></Form.Control>
                            </Form.Group>
                        </Col>


                        <Col>
                            <Form.Group>
                                <Form.Label>Maximo de Rondas:</Form.Label>
                                <Form.Control type="" className="mb-8" name="max_round" ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                        <Row className="mb-8">
                            <Card.Title className="text-center "> METRICAS </Card.Title>
                        </Row>

                        <Row className="text-center">
                            <Col>
                                <Form.Group >
                                    <Form.Label>Descripcion:</Form.Label>
                                    <Form.Control className="mb-5" name="correo" ></Form.Control>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group >
                                    <Form.Label>Maximo de Puntos :</Form.Label>
                                    <Form.Control className="mb-5" name="correo" ></Form.Control>
                                </Form.Group>
                            </Col>
                                
                        </Row>

                <Row className="text-center ">
                    <Col>
                        <Button className="m-3" onClick={() => agregarMetric()}> Agregar Metrica </Button>
                    </Col>
                </Row>
                <Row className="text-center ">
                    <Col>
                        <Button className="m-3" onClick={() => onSumbit()}> Guardar</Button>
                    </Col>
                </Row>
                
            </Card.Body>
        </Card>
        </Container >
    )

}
