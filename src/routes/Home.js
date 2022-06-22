  import React from "react";
import Navbar from "../components/NavBar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Work from "../components/Work"
const Home = () => {
  return ( 
  <div>  
         <Navbar/>
         <HeroImage/>
         <Work/>
         <Footer/>
    </div>
  );
};

export default Home;