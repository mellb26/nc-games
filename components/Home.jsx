import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { home } from "../utils/data";

const Home = () => {
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    home()
      .then(({ data }) => {
        setHome(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return <p> Loading . . .</p>;
  }

  return <h1> Welcome to NC Games review </h1>;
};

export default Home;
