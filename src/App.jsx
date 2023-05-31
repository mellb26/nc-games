import { useState } from 'react'
import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../components/Main"
import { BrowserRouter } from "react-router-dom";

function App() {
  const [currentReviews, setCurrentReviews] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Header />
          <Footer />
        <Main setCurrentReviews={setCurrentReviews} />
      </BrowserRouter>
    </>
  );
}

export default App
