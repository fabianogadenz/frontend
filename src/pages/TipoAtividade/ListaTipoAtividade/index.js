import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { Table, ButtonGroup, Col, Button } from 'react-bootstrap/';



export default function ListaTipoAtividade() {
    const [tipoAtividades, setTipoAtividades] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            // const user_id = localStorage.getItem('user');
            const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
            const response = await api.get('/tipoAtividade/findall/', {
                headers: { "Authorization": token }
            });

            setTipoAtividades(response.data);
        }
        loadSpots();
    }, [])

 

    async function excluir(arg, _id) {
        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
        const response = await api.delete('/tipoAtividade/' + _id, {
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
                        <th>Referência</th>
                        <th>Descricao</th>
                        <th>Pontuação</th>
                        <th>Pontuação Máxima</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tipoAtividades.map((tpAtividade, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{tpAtividade.idReferencia}</td>
                            <td>{tpAtividade.descricao}</td>
                            <td>{tpAtividade.pontuacao}</td>
                            <td>{tpAtividade.pontuacaoMaxima}</td>

                            <td>
                                <Button variant="danger"
                                 size="sm" 
                                 onClick={(event) => excluir(event, tpAtividade._id)}>
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