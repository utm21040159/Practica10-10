import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
export const Login = () => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title> Bienvenido inicia sesion </Card.Title>
                    <Row>
                        <Col>
                            <Form.Control />
                            <Form.Control />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button> Ingresa </Button>
                        </Col>
                    </Row>
                        <Row>
                            <Col>
                            Olvidaste tu contrasena? Recuperala aqui <a> aqui </a>
                            </Col>
                            <Col>
                            Todavia no tienes cuenta? Registrate aqui <a> aqui </a>
                            </Col>
                        </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}