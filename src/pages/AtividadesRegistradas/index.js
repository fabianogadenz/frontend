import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Table, ButtonGroup, Col, Button } from 'react-bootstrap/';



export default function AtividadesRegistradas() {
    const [tipoAtividades, setTipoAtividades] = useState([]);
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            // const user_id = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
            const response = await api.get('/atividadesRegistradas/getRegistros/', {
                headers: { "Authorization": token }
            });

            setTipoAtividades(response.data.infos);
            setInfos(response.data.atividades)
            console.log(tipoAtividades);
            console.log(infos);
        }
        loadSpots();
    }, [])

 

    async function excluir(arg, _id) {
      
        console.log(_id);
    }

    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Referência</th>
                        <th>Pontuação Máx</th>
                        <th>Pontuação Un</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {tipoAtividades.map((tpAtividade, index) => (
                        <tr>
                            <td>{tipoAtividades[index].descricao}</td>
                            <td>{tipoAtividades[index].pontuacaoMaxima}</td>
                            <td>{tipoAtividades[index].pontuacao}</td>
                            <td>{index+1}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}