import React from "react";
import ArtistCard from "../ArtistCard";

class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="text-center">Similar artist</h5>
        <hr />
        <div className="row">
          <ArtistCard img={"http://placehold.it/350x350"} titulo={"prueba"} />
          <ArtistCard img={"http://placehold.it/350x350"} titulo={"prueba"} />
          <ArtistCard img={"http://placehold.it/350x350"} titulo={"prueba"} />
          <ArtistCard img={"http://placehold.it/350x350"} titulo={"prueba"} />
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
