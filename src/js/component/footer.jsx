import React from "react";

const myFooterStyles = {
	fontSize: "10px"
}

const Footer = () => {
    return ( 
              <nav className="navbar navbar-expand-lg bg-dark" >
                    <div className="container-fluid d-flex justify-content-center">
                        <a style={myFooterStyles} className="navbar-brand text-white" href="#"> Copyright© Your Website 2023</a>
                        </div>
                        </nav>
 
    );
};

export default Footer;