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
                    <NavDropdown.Item href="/listaAreas">Listar Áreas</NavDropdown.Item>
                        <NavDropdown.Item href="/novaSubArea">Nova Sub-área</NavDropdown.Item>
                        <NavDropdown.Item href="/listaSubAreas">Listar Sub-áreas</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Tipo Atividade" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/novaTipoAtividade">Novo Tipo Atividade</NavDropdown.Item>
                        <NavDropdown.Item href="/listaTipoAtividade">Listar Tipos de Atividade</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/planos">Planos</Nav.Link>

                    
                    <Nav.Link href="/atividadeAdd">Registrar Atividade</Nav.Link>
                    <Nav.Link href="/ranking">Ranking</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;