import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <Link to={"/artista?" + this.props.titulo}>
        <div className="banda">
          <img src={this.props.img} alt={this.props.titulo} className="image" />
          <p className="nombre-banda">{this.props.titulo}</p>
        </div>
      </Link>
    );
  }
}

export default ArtistCard;
