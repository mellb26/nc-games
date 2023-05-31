import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Reviews from "../components/Reviews"
import Home from "../components/Home"
import SingleReview from "./SingleReview";
const Main = () => {
    return (
        <main>
        <Routes>
         <Route path="/" element={<Home/>} />
                <Route path="/reviews" element={<Reviews />} />  
                <Route path="/reviews/:review_id" element={<SingleReview />}/>
        </Routes>
        </main>
)
};

export default Main;


