import React, { useState } from 'react';
import api from '../../../services/api';
import { Form, Col, Button } from 'react-bootstrap/'

import './styles.css'
export default function NovaArea({ history }) {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
   



    async function handleSubmit(event) {
        event.preventDefault();
       // const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
        console.log(nome);
        console.log(descricao);
        //console.log(token);
        
          const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
          const response = await api.post('/grandeArea/register', {
            grandeAreaNome: nome,
            grandeAreaDescricao: descricao,
          },{headers: { "Authorization": token }});
        

        history.push('/listaAreas');
    }

  

    return (
        <>
            <p>
                Cadastre uma <strong>nova área</strong>.
            </p>

            <Form onSubmit={handleSubmit}>
                
                    <Form.Group as={Col} controlId="formNome">
                        <Form.Label>Nome da Área</Form.Label>
                        <Form.Control
                        required
                            type="text"
                            placeholder="Digite o nome da Área"
                            value={nome}
                            onChange={event => setNome(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDescricao">
                        <Form.Label>Descrição da Área</Form.Label>
                        <Form.Control
                        as="textarea" rows="3"
                        required
                            type="text"
                            placeholder="Descreva a Área"
                            value={descricao}
                            onChange={event => setDescricao(event.target.value)} />
                    </Form.Group>
                
                


                <Button variant="primary" type="submit">
                    Inserir </Button>
            </Form>
        </>
    )
}