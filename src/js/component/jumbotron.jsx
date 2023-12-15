import React from "react";

const myJumboStyles = {
	background: "#eaecf0"
}

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 rounded-3" style={myJumboStyles}>
        <div className="container-fluid py-5">
          <h1 className="display-5 ">A Warm Welcome</h1>
          <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button className="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>
    );
}

export default Jumbotron