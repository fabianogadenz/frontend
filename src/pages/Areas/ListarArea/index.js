import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { Table, ButtonGroup, Col, Button } from 'react-bootstrap/';



export default function ListaAreas() {
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            // const user_id = localStorage.getItem('user');
            const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
            const response = await api.get('/grandeArea/findall/', {
                headers: { "Authorization": token }
            });

            setAreas(response.data);
        }
        loadSpots();
    }, [])
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descriçãoo</th>
                        <th>Criado em</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {areas.map((area, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{area.grandeAreaNome}</td>
                            <td>{area.grandeAreaDescricao}</td>
                            <td>{area.createdAt}</td>
                           
                            <td>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="primary" size="sm">Edit</Button>
                                    <Button variant="danger" size="sm">-</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}