import React from "react";
import "./index.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="banda">
        <img src={this.props.img} alt={this.props.titulo} className="image" />
        <p className="nombre-banda">{this.props.titulo}</p>
      </div>
    );
  }
}

export default ArtistCard;
