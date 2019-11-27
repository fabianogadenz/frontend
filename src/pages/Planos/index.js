import React, { useEffect, useState } from 'react';
import { CardGroup, Card, Button, ListGroup, Badge, Row, Col, Modal, Form} from 'react-bootstrap/';



export default function Planos() {

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

                    <Button variant="primary">Registrar</Button>
                    <Button  variant="secondary">Ver Atividades</Button>
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
     <Button  variant="secondary">Ver Atividades</Button>
                    
                   
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
     <Button  variant="secondary">Ver Atividades</Button>
                </Card>
            </CardGroup>


           

        </>
    )
}