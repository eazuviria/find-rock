import React from "react";
import logo from "../../logo.svg";
import "./index.css";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="barra">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="Find Rock Logo" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-4">
            <form
              name="formulario"
              className="form-inline"
              onSubmit={this.props.onSubmit}
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
