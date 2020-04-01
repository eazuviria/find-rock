import React from "react";
import ReactDOM from "react-dom";
import SearchBarHome from "./components/SearchBarHome";
import Modal from "./components/Modal";

class Home extends React.Component {
  state = {
    busqueda: "",
    modal: null
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
  handleClick = e => {
    e.preventDefault();
    this.setState({
      modal: true
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBarHome
          onChange={this.changeHandle}
          onSubmit={this.handleSubmit}
          onClick={this.handleClick}
          busqueda={this.state.busqueda}
        />
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4 className="m-a">Modal</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </React.Fragment>
    );
  }
}

export default Home;
