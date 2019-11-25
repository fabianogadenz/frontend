import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import NovoUsuario from './pages/Usuarios/NovoUsuario';
import Usuarios from './pages/Usuarios/ListarUsuarios';
import NovaArea from './pages/Areas/NovaArea';
import NovaSubArea from './pages/Areas/NovaSubArea';
import ListaAreas from './pages/Areas/ListarArea';
import ListaSubAreas from './pages/Areas/ListarSubAreas';
import NovaTipoAtividade from './pages/TipoAtividade/NovaTipoAtividade';
import ListaTipoAtividade from './pages/TipoAtividade/ListaTipoAtividade';
import Planos from './pages/Planos';


export default function Routes(){
   // const token = localStorage.getItem('token');

   // var rotaInicial = Login;
  //  if(token != null)
   // rotaInicial = Dashboard;
   // console.log(token);
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new" component={New} />
            <Route path="/novoUsuario" component={NovoUsuario} />
            <Route path="/usuarios" component={Usuarios} />
            <Route path="/novaArea" component={NovaArea} />
            <Route path="/listaAreas" component={ListaAreas} />
            <Route path="/novaSubArea" component={NovaSubArea} />
            <Route path="/listaSubAreas" component={ListaSubAreas} />
            <Route path="/novaTipoAtividade" component={NovaTipoAtividade} />
            <Route path="/listaTipoAtividade" component={ListaTipoAtividade} />
            <Route path="/planos" component={Planos} />

            

            </Switch>
        </BrowserRouter>
    )
}