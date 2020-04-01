import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import ReactDOM from "react-dom";
class Busqueda extends Component {
  state = {
    busqueda: ""
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.setState({
      busqueda: search
    });
  }
  changeHandle = e => {
    this.setState({
      busqueda: e.target.value
    });
    // this.props.history.push(this.state.busqueda);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
          onSubmit={this.handleSubmit}
        />
        <SearchResult busqueda={this.state.busqueda} />
        {ReactDOM.createPortal(
          <h1>hola soy un portal</h1>,
          document.getElementById("teleport")
        )}
      </React.Fragment>
    );
  }
}

export default Busqueda;
