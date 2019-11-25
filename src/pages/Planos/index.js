import React, { useEffect, useState } from 'react';
import { CardGroup, Card, Button, ListGroup, Badge, Row, Col, Modal, Form} from 'react-bootstrap/';



export default function Planos() {
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);}
    const handleShow = () => {setShow(true);}

    let newDate = new Date()
    let date = newDate.getFullYear();

    return (
        <>
            <CardGroup>
                <Card>
                    <Card.Header as="h5">Planejamento {date - 1}</Card.Header>
                    <Card.Body>

                        <Card.Text>
                            Veja o seu planejamento de {date - 1} para registrar suas atividades complementares realizadas.
                        </Card.Text>

                    </Card.Body>

                    <ListGroup variant="flush">


                        <ListGroup.Item>
                            <Row>
                                <Col xs={5} md={8}>
                                    Meus pontos:
                                </Col>
                                <Col md={{ span: 2, offset: 2 }}>
                                    <Badge variant="primary">4142</Badge>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Quantidade de registros:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">12</Badge>
                            </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking do meu câmpus:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">4º</Badge>
                            </Col>
                        </Row></ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking geral:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">8º</Badge>
                            </Col>
                        </Row></ListGroup.Item>

                    </ListGroup>

                    <Button variant="primary"  onClick={handleShow}>Registrar</Button>
                </Card>


                <Card>
                    <Card.Header as="h5">Planejamento {date}</Card.Header>
                    <Card.Body>

                        <Card.Text>
                            Veja o seu planejamento de {date} para registrar suas atividades complementares realizadas.
                        </Card.Text>

                    </Card.Body>

                    <ListGroup variant="flush">


                        <ListGroup.Item>
                            <Row>
                                <Col xs={5} md={8}>
                                    Meus pontos:
                                </Col>
                                <Col md={{ span: 2, offset: 2 }}>
                                    <Badge variant="primary">Primary</Badge>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Quantidade de registros:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">Primary</Badge>
                            </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking do meu câmpus:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">Primary</Badge>
                            </Col>
                        </Row></ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking geral:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">Primary</Badge>
                            </Col>
                        </Row></ListGroup.Item>

                    </ListGroup>

                    <Button variant="primary">Registrar</Button>
                </Card>

                <Card>
                    <Card.Header as="h5">Planejamento {date + 1}</Card.Header>
                    <Card.Body>

                        <Card.Text>
                            Veja o seu planejamento de {date + 1} para registrar suas atividades complementares realizadas.
                        </Card.Text>

                    </Card.Body>

                    <ListGroup variant="flush">


                        <ListGroup.Item>
                            <Row>
                                <Col xs={5} md={8}>
                                    Meus pontos:
                                </Col>
                                <Col md={{ span: 2, offset: 2 }}>
                                    <Badge variant="primary">Primary</Badge>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Quantidade de registros:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">Primary</Badge>
                            </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking do meu câmpus:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">Primary</Badge>
                            </Col>
                        </Row></ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking geral:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">Primary</Badge>
                            </Col>
                        </Row></ListGroup.Item>

                    </ListGroup>

                    <Button variant="primary">Registrar</Button>
                </Card>
            </CardGroup>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form >

<Form.Group as={Col} controlId="formSubArea">
            <Form.Label>Sub-área *</Form.Label>
            <Form.Control as="select"
            required>
               
                <option  > teste</option>
           }
            </Form.Control>
        </Form.Group>

    <Form.Row>
    
        <Form.Group as={Col} controlId="formIdReferencia">
            <Form.Label>Quantidade</Form.Label>
            <Form.Control
            required
                type="text"
                placeholder="ex: 1A" />
        </Form.Group>
    </Form.Row>
    
    
    <Form.Row>
        <Form.Group as={Col} controlId="formObservacao">
            <Form.Label>Observacao</Form.Label>
            <Form.Control
            as="textarea"
                rows="2"
                placeholder="Digite a observação aqui"/>
        </Form.Group>
    </Form.Row>
    <Button variant="primary" type="submit">
        Salvar </Button>
</Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}