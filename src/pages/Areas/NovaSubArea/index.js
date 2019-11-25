import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Form, Col, Button } from 'react-bootstrap/'

import './styles.css'
export default function NovaSubArea({ history }) {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [area, setArea] = useState(2)
    const [grandAreas, setGrandeAreas] = useState([])


    useEffect(() => {
        async function loadSpots() {
            // const user_id = localStorage.getItem('user');
            const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
            const response = await api.get('/grandeArea/findall/', {
                headers: { "Authorization": token }
            });

            setGrandeAreas(response.data);
           // setArea(response.data[0].area.grandeAreaNome)
        }
        loadSpots();
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        
        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
        const response = await api.post('/subArea/register', {
            grandeArea: area,
            subAreaNome: nome,
            subAreaDescricao: descricao,
        },{headers: { "Authorization": token }});
        history.push('/listaSubAreas');
    }

    const teste = event => {
        event.preventDefault();
  
        console.log(area);
        console.log(nome);
        console.log(descricao);
    };

    return (
        <>
            <p>
                Cadastre uma <strong>nova sub-área</strong>.
            </p>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Selecione a Área</Form.Label>
                    <Form.Control as="select"
                        required
                        value={area}
                        onChange={event => setArea(event.target.value)}
                    >
                        {grandAreas.map((area, index) => (
                            <option key={area._id}>{area.grandeAreaNome} - {area.grandeAreaDescricao}</option>
                        ))}

                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formNome">
                    <Form.Label>Nome da sub-área</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Digite o nome da sub-área"
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formDescricao">
                    <Form.Label>Descrição da sub-área</Form.Label>
                    <Form.Control
                        as="textarea" rows="3"
                        required
                        type="text"
                        placeholder="Descreva a sub-área"
                        value={descricao}
                        onChange={event => setDescricao(event.target.value)} />
                </Form.Group>




                <Button variant="primary" type="submit">
                    Inserir </Button>
            </Form>
        </>
    )
}