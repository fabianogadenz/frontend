import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function NavbarComponent({ history }) {

    async function logoff(arg) {
        localStorage.removeItem('token');
        localStorage.removeItem('tipoCadastro');
        history.push('/');
        //window.location.reload();
        console.log("sair");
    }

    const token = localStorage.getItem('token');
    const tipoCadastro = localStorage.getItem('tipoCadastro');
    console.log(token);
    console.log(tipoCadastro);
    return (

        (token != null) ?
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/planos">UTFPR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="/planos">Home</Nav.Link>
                        <NavDropdown title="Usuários" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/novoUsuario">Novo Usuário</NavDropdown.Item>
                            <NavDropdown.Item href="/usuarios">Listar Usuários</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Áreas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/novaArea">Nova Área</NavDropdown.Item>
                            <NavDropdown.Item href="/listaAreas">Listar Áreas</NavDropdown.Item>
                            <NavDropdown.Item href="/novaSubArea">Nova Sub-área</NavDropdown.Item>
                            <NavDropdown.Item href="/listaSubAreas">Listar Sub-áreas</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tipo Atividade" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/novaTipoAtividade">Novo Tipo Atividade</NavDropdown.Item>
                            <NavDropdown.Item href="/listaTipoAtividade">Listar Tipos de Atividade</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/ranking">Ranking</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-secondary" onClick={(event) => logoff(event)}>Logoff</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            : <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">UTFPR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
    )
}

export default NavbarComponent;