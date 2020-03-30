import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./page-home";
import Artist from "./page-artist";
import Busqueda from "./page-search-result";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
class App extends React.Component {
  state = {
    busqueda: ""
  };
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={Busqueda} />
            <Route exact path="/artista" component={Artist} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
