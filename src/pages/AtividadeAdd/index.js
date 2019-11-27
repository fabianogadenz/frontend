import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Table, Col, Button, Form, Modal, Alert } from 'react-bootstrap/';



export default function ListaTipoAtividade() {
    const [tipoAtividades, setTipoAtividades] = useState([]);
    const [quantidade, setQuantidade] = useState(0)
    const [show, setShow] = useState(false);
    const [validaQuantidade, setValidaQuantidade] = useState(false);

    const [nomeAtividade, setNomeAtividade] = useState("");
    const [pontosAtividade, setPontosAtividade] = useState(0);
    const [quantidadeCadastrada, setQuantidadeCadastrada] = useState(0);
    const [pontosCadastrada, setPontosCadastrada] = useState(0);
    const [pontosFuturos, setPontosFuturos] = useState(0);
    const [pontosMax, setPontosMax] = useState(0);

    const [idAtividade, setIdAtividade] = useState(0);


    const handleClose = () => { setShow(false); }

    function abrirModal(arg, atividade) { 
        console.log(atividade);
        setIdAtividade(atividade._id);
        setNomeAtividade(atividade.descricao);
        setPontosAtividade(atividade.pontuacao);
        setQuantidadeCadastrada(0);
        setPontosCadastrada(0);
        setPontosFuturos(0);
        atividade.pontuacaoMaxima != null? setPontosMax(atividade.pontuacaoMaxima) : setPontosMax("não aplicável");
        setShow(true); 
        setQuantidade(0);

    }


    async function calcular(event) {
        event.preventDefault();
        console.log(quantidade);
        if(!Number(quantidade) > 0)
         setValidaQuantidade(false)
        else{
            setValidaQuantidade(true)
            var nova_pontuacao = (Number(quantidade) * Number(pontosAtividade)) + quantidadeCadastrada;
            if(nova_pontuacao > pontosMax)
                nova_pontuacao = pontosMax;
            setPontosFuturos(nova_pontuacao);

        }
            
         
    }

    async function enviar(event) {
        event.preventDefault();
        console.log(quantidade);
        if(!Number(quantidade) > 0)
         setValidaQuantidade(false)
        else {
            setValidaQuantidade(true)
        }
        
        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
              const response = await api.post('/atividadeRegistro/register', {
            atividade_id: idAtividade,
            plano_registro: 2019,
            quantidade_registrado: quantidade
        },{headers: { "Authorization": token }});
        console.log("print "+ response.data);

        setShow(false);
    }

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

    function excluir(arg, teste) {
        arg.preventDefault();
        console.log(teste);
    }

    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id Referência</th>
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
                                <Button variant="primary"
                                    size="sm"
                                    onClick={(event) => abrirModal(event, tpAtividade)}
                                    //onClick={handleShow(tpAtividade)}
                                    >
                                    Inserir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Informe a quantidade de horas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >

                        <p>
                            Sub área: <strong> {nomeAtividade}</strong>.
            </p>
                        <p>
                            Essa atividade equivale a <strong> {pontosAtividade} pontos por unidade</strong>.
            </p>
                        <p>
                            Quantidade já cadastrada: <strong>{quantidadeCadastrada}</strong>.
            </p>
                        <p>
                                Você já possui <strong>{pontosCadastrada}</strong> pontos nessa atividade.
            </p>
                        <Form.Row>

                            <Form.Group as={Col} controlId="formIdReferencia">
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    value={quantidade}
                                    onChange={event => setQuantidade(event.target.value)}
                                    placeholder="Insira a quantidade" />
                            </Form.Group>
                            <Button variant="secondary"  onClick={calcular}>
                                Calcular
          </Button>
                        </Form.Row>
            

                        <p>
                            Você ficará com: <strong>{pontosFuturos}</strong> pontos.
            </p>
                        <p>
                            Pontos máximos: <strong>{pontosMax}</strong>.
            </p>


                    </Form>
                    <Alert key={"idx"} variant={"danger"} show={!validaQuantidade}>
    Quantidade deve ser maior que 0.
  </Alert>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
          </Button>
                    <Button variant="primary" onClick={enviar}>
                        Salvar
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}