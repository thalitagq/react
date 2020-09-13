import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Importar as páginas
import Home from "./Home";
import Profile from "./Profile"
import NavBar from "./NavBar";

const users = ['user1', 'user2', 'user3']

//Criar o componentes com as rotas
//  component={() => <PropsPage title={`Props through component`} />}
function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/perfil" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
