import React, { Component } from 'react';
import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import Infos from "./Infos/Infos.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Infos />
        <Footer />
      </div>
    );
  }
}

export default App;
