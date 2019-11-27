import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Form, Col, Button, Alert } from 'react-bootstrap/'
import ReactDOM from 'react-dom'
export default function NovaTipoAtividade({ history }) {

    const [idItem, setIdItem] = useState('')
    const [pontuacao, setPontuacao] = useState('')
    const [pontuacaoMaxima, setPontuacaoMaxima] = useState('')
    const [descricao, setDescricao] = useState('')
    const [observacao, setObservacao] = useState('')
    const [area, setArea] = useState(1)
    const [subAreas, setSubAreas] = useState([])

    useEffect(() => {
        async function loadSpots() {
            // const user_id = localStorage.getItem('user');
            const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
            const response = await api.get('/subArea/findall/', {
                headers: { "Authorization": token }
            });

            setSubAreas(response.data);
            setArea(response.data[0]._id)
            console.log(area);

        }
        loadSpots();
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        
        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
        const response = await api.post('/tipoAtividade/register', {
            subAreaId: area,
            idReferencia: idItem,
            pontuacao: pontuacao,
            pontuacaoMaxima: pontuacaoMaxima,
            descricao: descricao,
            observacao: observacao,
        },{headers: { "Authorization": token }});
        history.push('/listaTipoAtividade');
    }

    // const teste = event => {
    //     event.preventDefault();
    //     console.log(area);
    //     //console.log(area.split(" - ")[1]);
    //     console.log(idItem);
    //     console.log(pontuacao);
    //     console.log(pontuacaoMaxima);
    //     console.log(descricao);
    //     console.log(observacao);
    // };

    return (
        <>
            <p>
                Cadastre um <strong>tipo de atividade</strong>.
            </p>

            <Form onSubmit={handleSubmit}>

            <Form.Group as={Col} controlId="formSubArea">
                        <Form.Label>Sub-área *</Form.Label>
                        <Form.Control as="select"
                        required
                            value={area}
                            onChange={event => setArea (event.target.value)}>
                           {subAreas.map((sub, index) => (
                            <option   value={sub._id}>{sub.subAreaNome} - {sub.subAreaDescricao}</option>
                        ))}
                        </Form.Control>
                    </Form.Group>

                <Form.Row>
                
                    <Form.Group as={Col} controlId="formIdReferencia">
                        <Form.Label>Item ID referência *</Form.Label>
                        <Form.Control
                        required
                            type="text"
                            placeholder="ex: 1A"
                            value={idItem}
                            onChange={event => setIdItem(event.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formPontuacao">
                        <Form.Label>Pontuação *</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Quantos pontos essa atividade possui?"
                            value={pontuacao}
                            onChange={event => setPontuacao(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="forPontuacaoMax">
                        <Form.Label>Pontuação Máxima</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Qual a pontuação máxima dessa atividade?"
                            value={pontuacaoMaxima}
                            onChange={event => setPontuacaoMaxima(event.target.value)}
                        />
                    </Form.Group>                    
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formDescricao">
                        <Form.Label>Descrição *</Form.Label>
                        <Form.Control
                        required
                        as="textarea"
                            placeholder="Digite a descrição aqui"
                            value={descricao}
                            onChange={event => setDescricao(event.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formObservacao">
                        <Form.Label>Observacao</Form.Label>
                        <Form.Control
                        as="textarea"
                            rows="2"
                            placeholder="Digite a observação aqui"
                            value={observacao}
                            onChange={event => setObservacao(event.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Salvar </Button>
            </Form>
        </>
    )
}