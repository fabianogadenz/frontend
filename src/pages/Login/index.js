import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css' 
import { Form, Col, Button } from 'react-bootstrap/'


export default function Login({ history }) {
  const [password, setPassword] = useState('')
  const [ra, setRa] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(password);
    const response = await api.post('/auth/authenticate', {
      ra: ra,
      password: password
    });

    const { token } = response.data;
    console.log(response.data.user.tipoCadastro)
    localStorage.setItem('tipoCadastro', response.data.user.tipoCadastro);
    localStorage.setItem('token', "Bearer " + token);


    history.push('/planos');
  }
  //function handleEmailChange(event){
  //  setEmail(event.target.value);
  //}

  return (
    <>
      <p>
        Gerencie o sistema de <strong>métricas</strong>.
            </p>
      <form onSubmit={handleSubmit}>
        <input
          id="ra"
          type="number"
          placeholder="Digite seu RA"
          value={ra}
          onChange={event => setRa(event.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
         <Button variant="primary" type="submit">
                    Entrar </Button>
      </form>
    </>
  )
}