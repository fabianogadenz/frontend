import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { CardGroup, Card, Button, ListGroup, Badge, Row, Col, Modal, Form } from 'react-bootstrap/';



export default function Planos({ history }) {

    let newDate = new Date()
    let date = newDate.getFullYear();
    const [infoPlanos, setInfoPlanos] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const token = localStorage.getItem('token');
            //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
            const response = await api.get('/atividadeRegistro/infoPlanos/', {
                headers: { "Authorization": token }
            });

            setInfoPlanos(response.data);
        }
        loadSpots();
    }, [])


    async function registrar(arg, id) {
        localStorage.setItem('plano', id);
        history.push('/atividadeAdd');
    }
    async function verAtividades(arg, id) {
        localStorage.setItem('plano', id);
        console.log(id);
    }
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
                                    <Badge variant="primary">{infoPlanos.pontos2018}</Badge>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking do meu câmpus:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">{infoPlanos.rankCampus2018}º</Badge>
                            </Col>
                        </Row></ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking geral:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">{infoPlanos.rankPlano2018}º</Badge>
                            </Col>
                        </Row></ListGroup.Item>

                    </ListGroup>
                    <Button variant="primary" onClick={(event) => registrar(event, date - 1)}>Registrar</Button>
                    <Button variant="secondary" onClick={(event) => verAtividades(event, date - 1)}>Ver Atividades</Button>

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
                                    <Badge variant="primary">{infoPlanos.pontos2019}</Badge>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking do meu câmpus:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">{infoPlanos.rankCampus2019}º</Badge>
                            </Col>
                        </Row></ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking geral:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">{infoPlanos.rankPlano2019}º</Badge>
                            </Col>
                        </Row></ListGroup.Item>

                    </ListGroup>



                    <Button variant="primary" onClick={(event) => registrar(event, date)}>Registrar</Button>
                    <Button variant="secondary" onClick={(event) => verAtividades(event, date)}>Ver Atividades</Button>


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
                                    <Badge variant="primary">{infoPlanos.pontos2020}</Badge>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                       
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking do meu câmpus:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">{infoPlanos.rankCampus2020}º</Badge>
                            </Col>
                        </Row></ListGroup.Item>
                        <ListGroup.Item><Row>
                            <Col xs={5} md={8}>
                                Ranking geral:
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                <Badge variant="primary">{infoPlanos.rankPlano2020}º</Badge>
                            </Col>
                        </Row></ListGroup.Item>

                    </ListGroup>


                    <Button variant="primary" onClick={(event) => registrar(event, date + 1)}>Registrar</Button>
                    <Button variant="secondary" onClick={(event) => verAtividades(event, date + 1)}>Ver Atividades</Button>
                </Card>
            </CardGroup>




        </>
    )
}