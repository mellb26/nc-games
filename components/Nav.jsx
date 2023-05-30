import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="Nav">
              <Link to="home" className="nav_item home"> Home{" "}
              </Link>
        <Link to="reviews" className="nav_item reviews"> Reviews{" "}</Link>
      </nav>
    </>
  );
};

export default Nav;
