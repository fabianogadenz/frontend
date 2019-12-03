import React, { useState } from 'react';
import api from '../../../services/api';
import { Form, Col, Button } from 'react-bootstrap/'

import './styles.css'
export default function NovoUsuario({ history }) {
    const [password, setPassword] = useState('')
    const [ra, setRa] = useState('')
    const [nome, setNome] = useState('')
    const [siape, setSiape] = useState('')
    const [email, setEmail] = useState('')
    const [departamento, setDepartamento] = useState('Departamento X')
    const [campus, setCampus] = useState('Apucarana')
    const [responsavel, setResponsavel] = useState(false)



    async function handleSubmit(event) {
        event.preventDefault();
        console.log(responsavel);
        var tipoCadastro = "professor";
        responsavel? tipoCadastro = "admin" : tipoCadastro = "professor";
        const response = await api.post('/auth/register', {
            email:email,
            nome:nome,
            siape:siape,
            ra: ra,
            departamento: departamento,
            sigla: "DACOMP",
            campus: campus,
            tipoCadastro: tipoCadastro,
            password: password,

        });

        const { token } = response.data;
        console.log(response.data);
        history.push('/usuarios');
    }

    const teste = event => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        console.log(nome);
        console.log(ra);
        console.log(siape);
        console.log(campus);
        console.log(departamento);
        console.log(responsavel);
    };

    return (
        <>
            <p>
                Cadastre um <strong>novo usuário</strong>.
            </p>

            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        required
                            type="email"
                            placeholder="Digite o Email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        required
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                        required
                            type="text"
                            placeholder="Digite o nome completo"
                            value={nome}
                            onChange={event => setNome(event.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formRA">
                        <Form.Label>RA</Form.Label>
                        <Form.Control
                        required
                            type="number"
                            placeholder="Digite o RA"
                            value={ra}
                            onChange={event => setRa(event.target.value)}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="forSiape">
                        <Form.Label>Siape</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Digite o numero do SIAPE"
                            value={siape}
                            onChange={event => setSiape(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCampus">
                        <Form.Label>Campus</Form.Label>
                        <Form.Control
                            required
                            as="select"
                            value={campus}
                            onChange={event => setCampus(event.target.value)}>
                            <option>Apucarana</option>
                            <option>Campo Mourão</option>
                            <option>Cornélio Procópio</option>
                            <option>Curitiba</option>
                            <option>Dois Vizinhos</option>
                            <option>Francisco Beltrão</option>
                            <option>Guarapuava</option>
                            <option>Londrina</option>
                            <option>Medianeira</option>
                            <option>Pato Branco</option>
                            <option>Ponta Grossa</option>
                            <option>Santa Helena</option>
                            <option>Toledo</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formDepartamento">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control as="select"
                            required
                            value={departamento}
                            onChange={event => setDepartamento(event.target.value)}>
                            <option>Departamento X</option>
                            <option>Departamento Y</option>
                            <option>Departamento Z</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} id="formGridCheckbox">
                        <Form.Check
                        
                            type="switch"
                            id="custom-switch"
                            label="Responsável?"
                            value={responsavel}
                        onChange={event => setResponsavel(!responsavel)} /> 
                    </Form.Group>
                </Form.Row>


                <Button variant="primary" type="submit">
                    Salvar </Button>
            </Form>
        </>
    )
}