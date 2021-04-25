import React from "react";
import "./Index.css";
import { Link, withRouter } from "react-router-dom";

function Nav() {

const navStyle = {
    color: "white"
};

  return (
    <nav className="nav">
      <h2><Link style={navStyle} to="/"><li>Mario ToDo-List</li></Link> </h2>
      <ul className="nav-links">
        <Link style={navStyle} to="/about"><li>About</li></Link>
        <Link style={navStyle} to="/task"><li>Tasks</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
