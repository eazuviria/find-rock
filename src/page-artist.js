import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SimilarArtist from "./components/SimilarArtist";

import "./page-artist.css";
class Artist extends Component {
  state = {
    busqueda: ""
  };
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
        <div className="container">
          <div className="row centrar">
            <div className="row centrar mtdef columna">
              <img
                src="https://pbs.twimg.com/profile_images/419312715140587521/NvqEYYyb.jpeg"
                alt="Gustavo Cerati"
                className="image-big"
              />
              <h2>Gustavo Cerati</h2>
              <p className="mtdef text-center mw55">
                Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de 1959-4 de
                septiembre de 2014)3​4​5​ fue un músico, cantautor, compositor y
                productor discográfico argentino. Obtuvo reconocimiento
                internacional por haber sido el cantante, guitarrista y
                compositor principal de la banda de rock Soda Stereo. Es
                considerado uno de los músicos más importantes, populares e
                influyentes del rock latinoamericano
              </p>
              <div className="mtbig">
                <SimilarArtist />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Artist;
