import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';
import { IEvent } from '../Types';



export const CreateEvent = () => {
    const emptyMetric = {
        descripcion: "",
        max_point: 0
    }
    const [event, setEvent] = useState<IEvent>({
        nombre: "",
        max_round: 0,
        metrics: [emptyMetric]
    })


    const onChangeBasicFields = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const data:any = event;
        data [e.target.name] = e.target.value;
        setEvent({...data})
    }
    
    const onChangeMetrics = (e: React.ChangeEvent<HTMLInputElement>, i:number) => {
        e.preventDefault()
        const data:any = event;
        data.metrics[i][e.target.name] = e.target.value;
        setEvent({...data})
    }

    const addMetric = () => {
        const data = event;
        data.metrics.push(emptyMetric);
        setEvent({ ...data })
    }

    const removeMetric = (iM: number) =>{
        const data = event;
        const metricsFiltered = data.metrics.filter((_,i) => i != iM)
        data.metrics = metricsFiltered;
        setEvent({...data})
    }


    const onSumbit = async () => {
        try {
           await axios.post("http://localhost:4000/event/create", event)
           Swal.fire("Evento registrado con exito", "", "error")
           console.log(event);
        } catch (error) {
            Swal.fire("Ocurrio un Error", "", "error")
            console.log(error);
        }
        
    }

    return (
        <Container>
            <Card className='m-3'>
                <Card.Body>
                    <Card.Title>Crear evento</Card.Title>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Titulo del evento</Form.Label>
                                    <Form.Control 
                                    onChange={onChangeBasicFields}
                                    name="nombre" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Numero de rondas</Form.Label>
                                    <Form.Control 
                                     onChange={onChangeBasicFields}
                                    name="max_round" type='number' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className='text-center'>
                                <Form.Label>Metricas:</Form.Label>
                                {
                                    event.metrics.map((metric, i) => (
                                        <Row className='mb-3' key={i}>
                                            <Col>
                                                <Form.Label>Descripción:</Form.Label>
                                                <Form.Control 
                                                onChange={(e:any)=>onChangeMetrics(e,i)}
                                                name="descripcion" />
                                            </Col>
                                            <Col>
                                                <Form.Label>Calificación maxima:</Form.Label>
                                                <Form.Control 
                                                onChange={(e:any)=>onChangeMetrics(e,i)}
                                                type='number' name="max_point" />
                                            </Col>

                                            {
                                                event.metrics.length > 1 && (
                                                    <Col xs={1}>
                                                <Button variant='danger' onClick={()=>removeMetric(i)}>
                                                    <Trash></Trash>
                                                </Button>
                                            </Col>
                                                )
                                            }

                                            
                                        </Row>
                                    ))
                                }
                                <div className='text-center'>
                                    <Button variant='info' onClick={() => addMetric()}>Agregar metrica</Button>
                                </div>
                            </Form.Group>
                        </Row>
                        <hr></hr>
                        <div className='text-center'>
                            <Button onClick={()=>onSumbit()}>Guardar evento</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}