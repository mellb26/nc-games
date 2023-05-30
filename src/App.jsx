import { useState } from 'react'
import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../components/Main"
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Header />
          <Footer />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App
