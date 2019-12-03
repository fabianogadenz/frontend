import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { Table, ButtonGroup, Col, Button } from 'react-bootstrap/';



export default function ListaSubAreas() {
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const token = localStorage.getItem('token');
           // const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
            const response = await api.get('/subArea/findall/', {
                headers: { "Authorization": token }
            });

            setAreas(response.data);
        }
        loadSpots();
    }, [])

    async function excluir(arg, _id) {
        //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
        const token = localStorage.getItem('token');
        const response = await api.delete('/subArea/' + _id, {
            headers: { "Authorization": token }
        });
        window.location.reload();
        console.log(_id);
    }

    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Grande Area</th>
                        <th>Sub Area Nome</th>
                        <th>Sub Area Descricao</th>
                        <th>Criado em</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {areas.map((area, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{area.grandeArea}</td>
                            <td>{area.subAreaNome}</td>
                            <td>{area.subAreaDescricao}</td>
                            <td>{area.createdAt}</td>

                            <td>
                                <Button variant="danger"
                                    size="sm"
                                    onClick={(event) => excluir(event, area._id)}>
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}