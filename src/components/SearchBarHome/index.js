import React from "react";
import logo from "../../logo.svg";

import "./index.css";

class SearchBarHome extends React.Component {
  state = {
    busqueda: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 centrado">
              <img src={logo} alt="Find Rock Logo" className="logo-barra" />
              <form
                name="formulario"
                className="form-home"
                onSubmit={this.handleSubmit}
              >
                <div className="busqueda-home">
                  <input
                    name="busqueda"
                    type="text"
                    id="buscar"
                    value={this.props.busqueda}
                    placeholder="Busca una banda"
                    onChange={this.props.onChange}
                  />
                </div>
                <div className="buttons">
                  <button className="btng">Search Similar Artist</button>
                  <button className="btng">EscuelaDevRock</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBarHome;
