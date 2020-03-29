import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
class Busqueda extends Component {
  state = {};
  UNSAFE_componentWillMount() {
    console.log("antes del render, component will mount");
  }
  componentDidMount() {
    console.log("despues del render, componente did mount");
  }
  componentWillUnmount() {
    console.log("se fue el componente");
  }
  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default Busqueda;
