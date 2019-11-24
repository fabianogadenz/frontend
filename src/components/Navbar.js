import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';



function NavbarComponent() {

    const token = localStorage.getItem('token');
    console.log(token);
    return (


        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">UTFPR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {token == null ? <Nav.Link href="/dashboard">Link</Nav.Link> : <div />}
                    <NavDropdown title="Usuários" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/novoUsuario">Novo Usuário</NavDropdown.Item>
                        <NavDropdown.Item href="/usuarios">Listar Usuários</NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown title="Áreas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/novaArea">Nova Área</NavDropdown.Item>
                    <NavDropdown.Item href="/listaAreas">Lista Áreas</NavDropdown.Item>
                        <NavDropdown.Item href="/novaSubArea">Nova Sub-área</NavDropdown.Item>
                        <NavDropdown.Item href="#">Listar Áreas</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Tipo Atividade" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Novo Tipo Atividade</NavDropdown.Item>
                        <NavDropdown.Item href="#">Listar Tipos de Atividade</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Plano de Trabalho" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Novo Plano </NavDropdown.Item>
                        <NavDropdown.Item href="#">Listar Planos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Registrar Atividade</Nav.Link>
                    <Nav.Link href="#">Ranking</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;