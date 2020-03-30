import React from "react";

function Error(props) {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="c-md-12 text-center">
          <h3>Error: {props.errorMensaje}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
