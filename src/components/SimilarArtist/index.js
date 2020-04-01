import React from "react";
import ArtistCard from "../ArtistCard";

class SimilarArtist extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <React.Fragment>
        <h5 className="text-center">Similar artist</h5>
        <hr />
        <div className="row justify-content-center">
          {this.props.data.map((item, i) => {
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

export default SimilarArtist;
