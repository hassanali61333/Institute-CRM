
import React from 'react';
import Navbar from "../component/navbar";
import Banner from "../component/banner";
import Card from "../component/cards";
import Contact from "../component/contact";
import Header from "../component/footer";

import "../component/navbar.css";
import "../component/banner.css";
import "../component/cards.css";
import "../component/contact.css";
import "../component/footer.css";

function Home() {
    return (  
        <>
         <Navbar />
      <Banner />
      <Card />
      <Contact />
      <Header />
        
        </>
    );
}

export default Home;