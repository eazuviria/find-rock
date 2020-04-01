import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SimilarArtist from "./components/SimilarArtist";
import Loading from "./components/Loading";
import Error from "./components/Error";

import "./page-artist.css";
class Artist extends Component {
  state = {
    loading: false,
    error: null,
    errorMensaje: "",
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" }
        ],
        bio: {
          summary: ""
        },
        similar: {
          artist: [
            {
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" }
              ],
              name: ""
            }
          ]
        }
      }
    }
  };
  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      this.setState({
        loading: true
      });
      let artista = this.props.history.location.search.substr(1);
      let url =
        "http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" +
        artista +
        "&api_key=14cde1321a930eaf0becae3d066ee3da&format=json";
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        this.setState({
          error: true,
          errorMensaje: data.message,
          loading: false
        });
      } else {
        this.setState({
          error: false,
          loading: false,
          data: data
        });
      }
    } catch (error) {
      this.setState({
        error: true,
        errorMensaje: "La api no responde"
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row centrar">
            <div className="row centrar mtdef columna">
              <img
                src={this.state.data.artist.image[2]["#text"]}
                alt="Gustavo Cerati"
                className="image-big"
              />
              <h2>{this.state.data.artist.name}</h2>
              <p
                className="mtdef text-center mw55"
                dangerouslySetInnerHTML={{
                  __html: this.state.data.artist.bio.summary
                }}
              ></p>
              <div className="mtbig">
                <SimilarArtist data={this.state.data.artist.similar.artist} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Artist;
