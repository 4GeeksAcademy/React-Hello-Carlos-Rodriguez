import React from "react";
import Cards from "./cards.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx"

//include images into your bundle

//create your first component
const Home = () => {
	return ( 
		<div> 
		<Navbar/>,
		<Jumbotron/>,
		<div className="container-fluid d-flex">
			<div className="row">
            <div className="col-sm-12 col-md-3 mt-3">
                <Cards />
            </div>
            <div className="col-sm-12 col-md-3 mt-3">
                <Cards />
            </div>
            <div className="col-sm-12 col-md-3 mt-3">
                <Cards />
            </div>
            <div className="col-sm-12 col-md-3 mt-3">
                <Cards />
            </div>
			</div>
            </div>
			<Footer/>
		</div>
	);
};

export default Home;


