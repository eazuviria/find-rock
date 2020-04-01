import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ArtistCard from "../ArtistCard";
import Loading from "../Loading";
import Error from "../Error";

class PageSearchResult extends Component {
  state = {
    loading: false,
    error: null,
    errorMensaje: "",
    data: {
      similarartists: {
        artist: []
      }
    }
  };

  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=14cde1321a930eaf0becae3d066ee3da&format=json"
    );
  }

  // componentDidUpdate(e) {
  //   console.log(e);
  // }

  fetchData = async url => {
    try {
      this.setState({
        loading: true
      });
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

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
        <div className="contenedor">
          {this.state.loading && <Loading />}
          {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
          {this.state.data.similarartists.artist.map((item, i) => {
            return (
              <ArtistCard
                img={item.image[2]["#text"]}
                titulo={item.name}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
