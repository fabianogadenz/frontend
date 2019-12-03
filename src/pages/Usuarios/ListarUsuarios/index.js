import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { Table, ButtonGroup, Col, Button } from 'react-bootstrap/';


import './styles.css'

export default function Dashboard() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            // const user_id = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
            const response = await api.get('/users/', {
                headers: { "Authorization": token }
            });
            console.log(response.data)
            setUsuarios(response.data);
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
                        <th>Email</th>
                        <th>Campus</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                     
                        <tr>
                            <td>{index}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.campus}</td>
                            <td>
                            <Button variant="danger"
                                 size="sm" >
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