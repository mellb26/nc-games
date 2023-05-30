import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Reviews from "../components/Reviews"
const Main = () => {
    return (
        <main>
        <Routes>
         {/* <Route path="/" element={<div></div>} /> */}
         <Route path="/reviews" element={<Reviews/>} />   
        </Routes>
        </main>
)
};

export default Main;


