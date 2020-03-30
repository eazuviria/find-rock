import React from "react";
import SearchBarHome from "./components/SearchBarHome";

class Home extends React.Component {
  state = {
    busqueda: ""
  };
  changeHandle = e => {
    this.setState({
      busqueda: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  render() {
    return (
      <SearchBarHome
        onChange={this.changeHandle}
        onSubmit={this.handleSubmit}
        busqueda={this.state.busqueda}
      />
    );
  }
}

export default Home;
